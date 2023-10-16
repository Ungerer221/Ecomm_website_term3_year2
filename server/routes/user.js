// ! check the test 3 site 
const express = require('express')
const jwt = require('jsonwebtoken')
const UserSchema = require('../models/user') // in the post route
require("dotenv/config")
const jwtKey = process.env.JWTPRIVATEKEY;

const router = express()

const { User, validate } = require("../models/user");
// const bcrypt = require("bcrypt");

require('dotenv/config')

// post is the create 
//* working for creating user
router.post('/api/addUser/', async (req, res) => {
    const user = new UserSchema({ ...req.body })
    await user.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// ? figure out !!!
//* new post for the login and sign up functionality
//! changed to dd user
router.post("/api/users/", async (req, res) => {
    try {
        const user = new UserSchema({ ...req, body });
        await user.save()

        // * to pass a message that the user creating was successful
        res.status(201).send({ message: "user created succesfully" });
    } catch (error) {
        //* to pass a message that the user creating was unsuccessful
        res.status(500).send({ message: "internal server Error" })
    };
});

// !get User
// get all users
router.get('/api/user/', async (req, res) => {
    const findUser = await UserSchema.find();
    res.json(findUser)
})



router.put('/api/user/:id', async (req, res) => {
    await UserSchema.updateOne({ _id: req.params.id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

// DELETE
router.delete('/api/deleteUser/:id', async (req, res) => {

    // const { id } = req.params._id
    await UserSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//? why (for the authentication so the then loging in then it will compare)
router.post('/api/auth', async (req, res) => {
    const { email, password } = req.body;
    try {
        // * so it will look for the email and password and if not found then return error message.
        const user = await UserSchema.findOne({ email, password });
        // * if there is no user then return error message
        if (!user) {
            return res.status(401).json({ messgae: "Authentication failed" });
        }
        const token = jwt.sign({ userId: user._id }, jwtKey, {
            expiresIn:"1h",
        });
        res.json({token});
    }catch (error){
        console.log("something went wrong", error);
        res.status(500).json({message:"internal server error"});
    }
})


module.exports = router;