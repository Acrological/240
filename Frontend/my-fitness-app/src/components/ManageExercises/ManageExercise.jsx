import { useEffect, useState,useRef} from "react";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import Button from "react-bootstrap/esm/Button";


export const ManageExercise = () => {
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
      {exercises?.map((exercise,index)=>{

        const recentWeight = exercise.history.length - 1;
        const exerciseHistory = [...exercise.history];
            return (
              <> 
               <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto" key={exercise.name}>
                  <div class="fw-bold">{exercise.name}</div>
                  Current Working Weight/Max: {exercise.history[recentWeight].weight}
                 {currentIndex == index && showUpdateBox && <input type="text" ref={exerciseWeight} placeholder="Input New Weight"/> }
                 {showHistory && exerciseHistory.map((e)=>{

                    return(
                        <>
                        <div>
                            {e.weightDate} : {e.weight}
                        </div>
                        </>
                    );
                 })}
                </div>
                <Button className="btn btn-danger" onClick={() => deleteExercise(index)}>Remove</Button>
                <Button className="btn btn-success" onClick={() => updateWorkout(index,recentWeight)}>Update</Button>
                <Button className="btn tbn-success"onClick={() => openRecords()}>History</Button>
              </li>
             
     </>
            );
        })}


    </ol>
  
       
    </>


    );
}