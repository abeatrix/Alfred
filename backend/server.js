require('dotenv').config()

// EXTERNAL IMPORTS
const express = require('express');
const cors = require('cors');

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
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// app.options('*', cors())
const {authRequired} = require('./middleware/valid')

// PORTFOLIO ROUTES
app.use('/api/portfolio', authRequired, routes.portfolio);

// USER ROUTES
app.use('/api/user', routes.user);

// AUTH ROUTES
app.use('/api/auth', routes.auth);

// SERVER LISTENER
app.listen(process.env.PORT || 4000, function () {
    console.log(`server up and running on PORT ${PORT}`)
})
