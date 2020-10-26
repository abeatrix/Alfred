//  HUB FOR MODELS AND DB CONNECTIONS
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URL || 'mongodb://localhost:27017/alfred-db';

/* LOOKING FOR FEEDBACKS */
mongoose.connect(connectionString, {
    userNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true,
    userFindAndModify: true,
}).then(() => console.log(`MongoDB successfully connected to ${connectionString}`)
.catch((err) => console.log(`MongoDB connection error: ${err}`));

// EXPORT
module.export = {
    User: require('./User.js'),
    Portfolio: require('./Portfolio'),
}
