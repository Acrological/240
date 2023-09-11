import { useEffect, useState } from "react";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import Button from "react-bootstrap/esm/Button";


export const ManageExercise = () => {

    const exerciseList = JSON.parse(localStorage.getItem('exercises'));
    const [exercises,setExercises] = useState([]);
    const [showCreateExercise,setShowCreateExercise] = useState(false);
    useEffect(()=>{
        if(exerciseList){
            setExercises(exerciseList);
        }

    },[exerciseList])

    const addExercise = () => {
        setShowCreateExercise(true);
    }
    
    return (    
    <>

    { showCreateExercise && <CreateExercise/>}
    <Button onClick={()=>
        addExercise()}>
        Add
    </Button>

    List of current exercises added:
        {exercises.map((exercise,index)=>{
            <>
            <div>
                {exercise.name}
            </div>
        <Button>
        Delete
    </Button>
     </>
        })}
       
    </>


    );
}