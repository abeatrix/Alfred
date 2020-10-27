const User = require('../models/User');
const expressJwt = require('express-jwt')
const _ = require('lodash')
const { OAuth2Client } = require('google-auth-library')
const fetch = require('node-fetch')
const { validationResult } = require('express-validator')
const jwt = require("jsonwebtoken");
const decode = require('jwt-decode');
const { errorHandler } = require('../middleware/responseHandlers')
const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


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
        );

        const emailMsg = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: '[Alfred] Account activation link',
            html: `
            <h1>Please Click <a href='${process.env.CLIENT_URL}/users/activate/${token}'>here</a> to activate</h1>
            <hr/>
            <p>${process.env.CLIENT_URL}</p>
            <p>The Alfred Team</p>
            `
        };

        sgMail.send(emailMsg).then(sent => {
            return res.json({
                message: `Email has been sent to ${email}`
            })
        }).catch(err => {
            return res.status(400).json({
                success: false,
                error: errorHandler(err)
            })
        })
    }
}

// save to database after activation
exports.activateController = (req, res) => {
    const { token } = req.body
    if(token){
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION,
            (err, decoded) => {
                if(err){
                    console.log('Activation error');
                    return res.status(401).json({
                        errors: 'Expired Token'
                    })
                } else {
                    //save to database
                    const { username, email, password } = jwt.decode(token);
                    console.log(email)
                    const user = new User({
                        username,
                        email,
                        password
                    })

                    user.save((err, user) => {
                        if(err){
                            return res.status(401).json ({
                                errors: errorHandler(err)
                            })
                        } else {
                            return res.json({
                                success: true,
                                message: 'Signup successfully',
                                user
                            })
                        }
                    })
                }
            })
    }  else {
        return res.json({
            message: 'Uh Oh an error!'
        })
    }
}

exports.loginController = (req, res) => {
    const { email, password } = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    } else {
        // Check is user exist
        User.findOne({
            email
        }).exec((err, user)=> {
            if(err || !user){
                return res.status(400).json({
                    error: 'Email does not exists.'
                })
            }

            // //Authentication
            // if(!password){
            //     return res.status(400).json({
            //         error: 'The entered info does not match our database'
            //     })
            // }

            //Generate Token
            const token = jwt.sign(
            {
                _id: user._id
            }, process.env.JWT_SECRET,
            {
                expiresIn: '7d',
            },
            )

            const {
                _id,
                username,
                email
            } = user
            return res.json({
                token,
                user: {
                    _id,
                    username,
                    email,
                }
            })
        })
    }
}
