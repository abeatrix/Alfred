const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {type: String, require: [true, 'you must provide a username'], minlength: 4, maxlength: 20, unique: true},
        email: {type: String, required: true, unique: true, trim: true},
        password: {type: String, required: true},
        profilePic: {type: String, default: 'https://www.flaticon.com/svg/static/icons/svg/3121/3121753.svg'},
        portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio'}]
    },
    {
        timestamps: true,
        createdAt: 'signupAt'
    },
);

userSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['password'];
        return ret;
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
