import { useEffect, useState,useRef} from "react";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import Button from "react-bootstrap/esm/Button";
import { Exercise } from "./Exercise";


export const ExerciseList = () => {
    // TODO: Refactor each exercise into a seperate component so the state can be individualized for button clicks/ save data
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
      {exercises?.map((exercise)=>{
        <Exercise exercise={exercise}/>
        })}


    </ol>
  
       
    </>


    );
}