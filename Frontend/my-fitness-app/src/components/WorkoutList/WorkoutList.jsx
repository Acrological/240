import { useState, useEffect } from "react";

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

        {workouts != null && WorkoutList.map((workout)=>{

            return (
                <div>
                {workout.name}
                </div>

            );

        })}

        {workouts == null && 
        <center>
            <div> No workouts to display 😔, please create some!! 😀</div>
            </center>}
        </>

    );


}