import { useEffect, useState } from "react";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import Button from "react-bootstrap/esm/Button";


export const ManageExercise = () => {

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

    const deleteExercise = (index) => {
        const newList = [...exercises]
        console.log(newList[index])
        newList.splice(index,1);
        console.log(newList);
        localStorage.setItem('exercises',JSON.stringify(newList));
        setUpdateList(x => !x);
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


    List of current exercises added:
    <ol className="list-group list-group-numbered">
      {exercises?.map((exercise,index)=>{

        const recentWeight = exercise.history.length - 1;

            return (
              <> 
               <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto" key={exercise.name}>
                  <div class="fw-bold">{exercise.name}</div>
                  Current Working Weight/Max: {exercise.history[recentWeight].weight}
                </div>
                <Button class="bi bi-trash" onClick={() => deleteExercise(index)}>X</Button>
              </li>
     </>
            );
        })}


    </ol>
  
       
    </>


    );
}