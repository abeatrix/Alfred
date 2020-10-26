const User = require('../models/User');
const expressJwt = require('express-jwt')
const _ = require('lodash')
const { OAuth2Client } = require('google-auth-library')
const fetch = require('node-fetch')
const { validationResult } = require('express-validator')
const jwt = require("jsonwebtoken");
const { errorHandler } = require('../middleware/responseHandlers')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.MAIL_KEY)

exports.registerController = (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password)
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    } else {
        User.findOne({
            email
        }).exec((error, user) => {
            //if user exists
            if (user) {
                return res.status(400).json({
                    error: 'Email is taken'
                })
            }
        })

        //Generate Token
        const token = jwt.sign(
            {
                username,
                email,
                password
            },
            process.env.JWT_ACCOUNT_ACTIVATION,
            {
                expiresIn: '30m'
            }
        )

        const emailData = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: '[Alfred] Account activation link',
            html: `
            <h1>Please Click to link to activate</h1>
            <p1>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <hr/>
            <p>${process.env.CLIENT_URL}</p>
            `
        }

        sgMail.send(emailData).then(sent => {
            return res.json({
                message: `Email has been sent to ${email}`
            })
        })
        .catch(err => {
            return res.status(400).json({
                error: errorHandler(err)
            })
        })
    }
}
