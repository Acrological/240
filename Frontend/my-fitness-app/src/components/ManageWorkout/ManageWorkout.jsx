import { useEffect, useState } from "react";
import { CreateWorkout } from "./CreateWorkout/CreateWorkout";


export const ManageWorkout = () => {
    const workouts = JSON.parse(localStorage.getItem("workouts"));
    const [workoutList,setWorkoutList] = useState([]);
    const [ showCreateWorkout,setShowCreateWorkout] = useState(false);

    useEffect(()=>{
        if(workoutList !== workouts){
            setWorkoutList(workouts);
        }

    },[showCreateWorkout])

    
    const renderCreate = () => {
        setShowCreateWorkout(x => !x);
    }

    return (
        <>
        {showCreateWorkout && 
        <CreateWorkout closeCreate={renderCreate}/>}
        {!showCreateWorkout &&    
        <>
        <h1>
            Workouts:
        </h1>
        <span onClick={()=>renderCreate()}>
            Add
        </span>
        <div>
            { workouts?.map((workout,index)=>{

                return (
                    
                    <div>
                        { workout.name }
                        <span>
                            show
                        </span>
                    </div>

                )
            })}
        </div> 
        </>
        }

        
        </>


    );

}