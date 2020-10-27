// EXTERNAL IMPORTS
const express = require('express');
const cors = require('cors');

// INTERNAL IMPORTS
const routes = require('./routes');
const db = require("./models");

// all uses of .env
// require("dotenv").config();
const PORT = process.env.PORT || 4000;

/* INSTANCED MODULES */
const app = express();

// // MIDDLEWARE - JSON PARSING
app.use(express.json());
app.use(cors());

// USERS ROUTES
// app.use('api/v1/users', routes.user);

// AUTH ROUTES
app.use('/api/auth/', routes.auth);

// SERVER LISTENER
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
