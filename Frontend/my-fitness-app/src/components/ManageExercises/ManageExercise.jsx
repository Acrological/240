import { useEffect, useState,useRef} from "react";
import { CreateExercise } from "./CreateExercise/CreateExercise";
import Button from "react-bootstrap/esm/Button";


export const ManageExercise = () => {

    const exerciseList = JSON.parse(localStorage.getItem('exercises'));
    const [exercises,setExercises] = useState([]);
    const [showCreateExercise,setShowCreateExercise] = useState(false);
    const [updateList,setUpdateList] = useState(false);
    const [showUpdateBox,setShowUpdateBox] = useState(false);
    const [currentIndex,setCurrentIndex] = useState();
    const exerciseWeight = useRef();
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
    
    const updateWorkout = (index,listLength) =>{
        const newList = [...exercises];
        console.log(newList[index].history[listLength].weight);
        setShowUpdateBox(x => !x);
        setCurrentIndex(index);
        const date = new Date();
        if(showUpdateBox == true){
        if(exercises[index].history[listLength].weight = exerciseWeight.current.value){
            console.log('same value');
        }
        else if(exerciseWeight.current.value < 0){
            console.log('no negative value');
        } 
        else if (exerciseWeight.current.value > 0 ){
            const newWeight = exerciseWeight.current.value
            newList.history.push({weightDate : date,
                weight : newWeight,})
            localStorage.setItem('exercises',JSON.stringify(newList));
            setUpdateList(x => !x);
            exerciseWeight.current.reset();
        } else {
                console.log(exerciseWeight.current.value + ' equates to no value');
        }
        }

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

            return (
              <> 
               <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto" key={exercise.name}>
                  <div class="fw-bold">{exercise.name}</div>
                  Current Working Weight/Max: {exercise.history[recentWeight].weight}
                 {currentIndex == index && showUpdateBox && <input type="text" ref={exerciseWeight} placeholder="Input New Weight"/> }
                </div>
                <Button className="btn btn-danger" onClick={() => deleteExercise(index)}>Remove</Button>
                <Button className="btn btn-success" onClick={() => updateWorkout(index,recentWeight)}>Update</Button>
              </li>
             
     </>
            );
        })}


    </ol>
  
       
    </>


    );
}