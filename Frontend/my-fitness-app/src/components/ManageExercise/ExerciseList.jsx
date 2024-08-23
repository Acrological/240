import { useEffect, useState,useRef} from "react";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import Button from "react-bootstrap/esm/Button";
import { Exercise } from "./Exercise";


export const ExerciseList = () => {
    const exerciseList = JSON.parse(localStorage.getItem('exercises'));
    const [exercises,setExercises] = useState([]);
    const [showCreateExercise,setShowCreateExercise] = useState(false);
    const [updateList,setUpdateList] = useState(false);


    useEffect(()=>{
        if(exerciseList !== exercises){
            setExercises(exerciseList);
        }

    },[showCreateExercise,updateList])

    const addExercise = () => {
        setShowCreateExercise(true);
    }

    const closeExercise = () => {
        setShowCreateExercise(false);
    }



    const updateListProp = () => {
        setUpdateList(x => !x);
    }
    


    return (    
    <>

    { showCreateExercise ? 
    <CreateExercise closeExerciseCreation={closeExercise} updateList={updateListProp}/> : 
    <Button onClick={()=>
        addExercise()}>
        Add
    </Button>}

    <ol className="list-group list-group-numbered">
      {exercises?.map((exercise,index)=>{
        return (
        <Exercise exercise={exercise} updateExercise={updateListProp} index={index}/> );
        })}

       



    </ol>
  
       
    </>


    );
}