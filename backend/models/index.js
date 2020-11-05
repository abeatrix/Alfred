//  HUB FOR MODELS AND DB CONNECTIONS
const mongoose = require('mongoose');

require("dotenv").config(); //USE .ENV FILE
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/alfred-db';

/* LOOKING FOR FEEDBACKS */
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true,
    userFindAndModify: true,
}).then(() => console.log(`MongoDB successfully connected to ${connectionString}`))
.catch((err) => console.log(`MongoDB connection error: ${err}`));

// EXPORT
module.export = {
    User: require('./User.js'),
    Portfolio: require('./Portfolio'),
}
