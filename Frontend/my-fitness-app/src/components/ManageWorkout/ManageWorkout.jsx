import { useEffect, useState } from "react";
import { CreateWorkout } from "./CreateWorkout/CreateWorkout";


export const ManageWorkout = () => {
    const workouts = localStorage.getItem("workouts");
    const [workoutList,setWorkoutList] = useState([]);
    const [ showCreateworkout,setShowCreateWorkout] = useState(false);

    const renderCreate = () => {
        setShowCreateWorkout(x => !x);
    }

    return (
        <>
        {showCreateworkout && 
        <CreateWorkout closeCreate={renderCreate}/>}
        {!showCreateworkout &&    
        <>
        <h1>
            Workouts:
        </h1>
        <span onClick={()=>renderCreate()}>
            Add
        </span>
        <div>
            { workoutList?.map((workout,index)=>{

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