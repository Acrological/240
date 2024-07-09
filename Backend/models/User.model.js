const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
        [
            {
                name:String,
                history: 
                    [
                        {
                        weightDate: Date,
                        weight: Number
                        }
                    ]
            }
        ],
    workouts:
    [{name:String,
        exercises:
        [
            {
                name:String,
                history: 
                    [
                        {
                        weightDate: Date,
                        weight: Number
                        }
                    ]
            }
        ],}]
    
});

const User = mongoose.model('User',userSchema,'FitnessUsers');
module.exports = User;
