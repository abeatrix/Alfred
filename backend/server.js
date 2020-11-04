require('dotenv').config()

// EXTERNAL IMPORTS
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const cloudinary = require('cloudinary').v2;

// INTERNAL IMPORTS
const routes = require('./routes');
const db = require("./models");

// all uses of .env
const PORT = process.env.PORT;

/* INSTANCED MODULES */
const app = express();

// // MIDDLEWARE - JSON PARSING
app.use(express.json());
app.use(cors());
app.options('*', cors())

// /* CONFIGURATION*/

// const corsOptions = {
//     origin: ["https://assembleit.herokuapp.com/"], //set url for live app
//     optionsSuccessStatus: 200, //for legacy ports where some legacy browsers will choke on status 204

// }
// app.use(cors(corsOptions));


// PORTFOLIO ROUTES
app.use('/api/portfolio', routes.portfolio);

// USER ROUTES
app.use('/api/user', routes.user);

// AUTH ROUTES
app.use('/api/auth', routes.auth);

// SERVER LISTENER
app.listen(process.env.PORT || 4000, function () {
    console.log(`server up and running on PORT ${PORT}`)
})
