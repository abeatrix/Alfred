//  HUB FOR MODELS AND DB CONNECTIONS
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

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
