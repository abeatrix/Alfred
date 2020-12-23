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

exports.registerController = async (req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password)
    const errors = validationResult(req)


    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    } else {
        await User.findOne({
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
                message: `Email has been sent to ${email}! Please check your email for account activation link.`
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
exports.activateController = async (req, res) => {
    const { token } = req.body
    if(token){
        await jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION,
            (err, decoded) => {
                if(err){

                    return res.status(401).json({
                        errors: 'Expired Token'
                    })

                } else {

                    //save to database
                    const { username, email, password } = jwt.decode(token);

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

exports.loginController = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    } else {
        // Check is user exist
        const password = req.body.password
        const foundUser = await User.findOne({ email: req.body.email })
        .exec((err,user)=>{
            if (err || !user) {
                return res.status(400).json({
                    errors: 'Email does not exists.'
                })
            }


            //Authentication
            if (user.password != password) {
                return res.status(400).json({
                    errors: 'The entered info does not match our database'
                })

            } else {
                const token = jwt.sign(
                    {
                        _id: user._id
                    },
                        process.env.JWT_SECRET,
                    {
                        expiresIn: '7d'
                    }
                );
                const { _id, name, email, role } = user;

                return res.json({
                    token,
                    user: {
                        _id,
                        name,
                        email,
                        role
                    }
                });
            }
        })

    }
}


const client = new OAuth2Client(process.env.GOOGLE_CLIENT)

exports.googleController = async (req, res) => {
    //GET TOKEN
    const idToken = req.body.idToken
    console.log('GOOGLE LOGIN RESPONSE',idToken)
    //VERIFY TOKEN
    client.verifyIdToken(
        {
            idToken,
            audience: process.env.GOOGLE_CLIENT
        }
        ).then(response=>{
        console.log('GOOGLE LOGIN RESPONSE',response)
        const {
            email_verified,
            name,
            email
        } = response.payload;
        // is email verified?
        if (email_verified) {
            User.findOne({email}).exec((err, user)=>{
                //if email exist in backend = user
                if(user){
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
                        expiresIn: '7d'
                    })

                    const {_id, email, name} = user;
                    // send res token to react
                    return res.json({
                        token,
                        user: {_id, email, name}
                    })
                } else {
                    let password = email + process.env.JWT_SECRET;
                    let username = name + process.env.JWT_SECRET;
                    user = new User({username, email, password})
                    user.save((err, data) => {
                        if(err){
                            return res.status(400).json({
                                error: 'unable to signup a new account with google'
                            })
                        }

                        const token = jwt.sign(
                            { _id: data._id },
                            process.env.JWT_SECRET,
                            { expiresIn: '7d' }
                        );

                        const { _id, email, username } = data;
                        return res.json({
                            token,
                            user: {_id, email, username}
                        })
                    })
                }
            })
        } else {
            return res.status(400).json({
                error: 'failed login attempt'
            })
        }
    })
}
