import { useEffect, useState } from "react";
import { CreateWorkout } from "./CreateWorkout/CreateWorkout";
import Button from 'react-bootstrap/esm/Button';

export const ManageWorkout = () => {
    const workouts = JSON.parse(localStorage.getItem("workouts"));
    const [workoutList,setWorkoutList] = useState([]);
    const [ showCreateWorkout,setShowCreateWorkout] = useState(false);
    const [showWorkout,setShowWorkout] = useState(false);
    const [showDetailsMessage,setDetailsMessage] = useState('show');
    useEffect(()=>{
        if(workoutList !== workouts){
            setWorkoutList(workouts);
        }

    },[showCreateWorkout])

    useEffect(()=>{
        if(showWorkout == true){
            setDetailsMessage('hide');
        }else {
            setDetailsMessage('show');
        }
    },[showWorkout])

    const renderCreate = () => {
        setShowCreateWorkout(x => !x);
    }

    const showWorkoutCardInfo = () => {
        setShowWorkout(x => !x);
        
    }

    return (
        <>
        {showCreateWorkout && 
        <CreateWorkout closeCreate={renderCreate}/>}
        {!showCreateWorkout &&    
        <>
        <Button onClick={()=>renderCreate()}>
            Add
        </Button>
        <Button onClick={()=> showWorkoutCardInfo()}>
                            {showDetailsMessage}
        </Button>
        <div>
        <ol className="list-group list-group-numbered">
            { workouts?.map((workout,index)=>{

                return (
                    <li class="list-group-item d-flex align-items-start">
                        <b>{ workout.name }</b> 
                        <div>
                            <ul>
                        {showWorkout && workout.exercises.map((exercise,index) => {
                        return (
                            <li>
                            <div>
                                {exercise.name}
                            </div>
                             </li>
                        )
                    })}
                    </ul> 
                        </div>
                       
                    </li>
                )
            })}
            </ol>
        </div> 
        </>
        }

        
        </>


    );

}