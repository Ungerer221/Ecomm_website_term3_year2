//! check this page
const mongoose = require('mongoose');
// * new
const jwt = require('jsonwebtoken');
const joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    }
});

// * authentification token 
UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" })
    return token
};

// creating user model
const User = mongoose.model("user", UserSchema);

// ! check 
const validate = (data) => {
    const schema = joi.object({
        // ? was firstName and ("First Name")
        Name: joi.string().required().label("Name"),
        // firstName:joi.string().required().label("Last Name"),
        userName: joi.string().required().label("UserName"),
        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data)
};

module.exports = mongoose.model("User", UserSchema);