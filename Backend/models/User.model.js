const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercise = new Schema(
            {
                name:String,
                history: 
                    [
                        {
                        _id: false ,
                        weightDate: Date,
                        weight: Number,
                        }
                    ],
                
                    _id:Number,
            }

)

const userSchema = new Schema({
    fname:String,
    email:{
    type:String,
    unique:true,
    },
    weight:Number,
    bench:Number,
    squat:Number,
    deadlift:Number,
    exercises:
        [exercise],
    workouts:
    [{name:String,
        exercises:
        [exercise],}]
    
});

const User = mongoose.model('User',userSchema,'FitnessUsers');
module.exports = User;
