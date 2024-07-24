const User = require('../models/User.model')

const createUser = async ({fname,password,email,weight,bench,squat,deadlift,exercises,workouts}) => {

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
module.exports = {createUser,getAllUsers,getUser,updateUser,loginUser}