// EXTERNAL IMPORTS
const express = require('express');
const cors = require('cors');

// INTERNAL IMPORTS
// const routes = require('./routes');

/* INSTANCED MODULES */
const app = express();

// MIDDLEWARE - JSON PARSING
app.use(express.json());
app.use(cors());

// MIDDLEWARE - API Routes
app.use('/api/v1/portfolios', route.portfolio);

// USERS ROUTES
app.use('api/v1/users', routes.user);


// SERVER LISTENER
app.listen(process.env.PORT || 4000, () => console.log(`server is running, for now...`));
