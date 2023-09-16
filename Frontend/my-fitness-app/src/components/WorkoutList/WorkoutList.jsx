import { useState, useEffect } from "react";
import { ManageWorkout } from "../ManageWorkout/ManageWorkout";

export const WorkoutList = () => {
    const workouts = JSON.parse(localStorage.getItem('workouts'));

    useEffect(()=>{
    if(workouts != null){
        setWorkoutList(workouts)
    }  
        
        
    },[workouts]);
    
    const [WorkoutList,setWorkoutList] = useState([]);

    return (
        <>

        <ManageWorkout/>
        </>

    );


}