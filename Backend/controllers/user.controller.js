const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model')

//TODO:JWT Functionality implementation for refresh after login and verifying

const signupUser = async ({fname,password,email,weight,bench,squat,deadlift,exercises,workouts}) => {

    try {
        const user = new User({
        fname,
        password,
        email,
        weight,
        bench,
        squat,
        deadlift,
        exercises,
        workouts
    
        }); //creates user object with user model
        await user.save(); //saves to database

            return user._id; // returns the id of the newly created user
    } catch (err) {
        console.error(err);
        throw {status: 404, message: err};
    }
}

const getAllUsers = async() => {
    const users = await User.find(); // Get all users
    return users;
}

const getUser = async(id) => {
    const user = await User.findById(id); // Get user by id
    return user;
}

const updateUser = async(id,updatedUser) => {
    try{
        const newUser= await User.findByIdAndUpdate(id,updatedUser,{new:true});
         if (newUser == null){ // if no user found, advise to create one
             throw `The user id ${ id } does not exist, please create it first!`
         }
         return newUser; // return results
     } catch (err){
         console.error(err);
         throw { status: 404, message: err };
}
}

const loginUser = async(logEmail,logPassword) => {
    try {
        const query = User.where({email: logEmail, password: logPassword})
        const existingUser = await query.findOne()
        if(existingUser != null){
            delete existingUser.password;
        }
        return existingUser;
    } catch (err){
        console.error(err);
         throw { status: 404, message: err };
}
}

app.post("/user/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token

    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey);

    res.send(token);
});

// Verification of JWT
app.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in header of request
    // Due to security reasons.

    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);

        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});
module.exports = {signupUser,getAllUsers,getUser,updateUser,loginUser}