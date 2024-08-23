import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/esm/Button";

export const CreateWorkout = ({closeCreate}) => {
const exercisesStored = JSON.parse(localStorage.getItem('exercises'));
const [exercises,setExercises] = useState([])
const [workouts,setWorkouts] = useState([])
const exerciseSelected = useRef();
const workoutName = useRef();

useEffect(()=>{
    if(exercisesStored !== exercises){
            setExercises(exercisesStored)
    }

},[])

const addExercise = () => {
    const workoutRoutine = [...workouts];
    const addedExercise = exercises[exerciseSelected.current.value]
    workoutRoutine.push(addedExercise);
    setWorkouts(workoutRoutine);
    updateSelect(exerciseSelected.current.value)
}
const deleteExercise = (index) => {
    const newList = [...workouts]
    newList.splice(index,1);
    setWorkouts(newList);
    const exerciseCopy = [...exercises]
    exerciseCopy.push(workouts[index])
    setExercises(exerciseCopy);
        // localStorage.setItem('exercises',JSON.stringify(newList));
        // setUpdateList(x => !x);
    
}

const updateSelect = (index) => {
  const newList = [...exercises]
        newList.splice(index,1);
        setExercises(newList);
}

const saveWorkout = () => {
    const completeWorkout = 
    {
        name: workoutName.current.value,
        exercises: [...workouts]
    }
    const listOfWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    listOfWorkouts.push(completeWorkout)
    localStorage.setItem('workouts',JSON.stringify(listOfWorkouts));
    closeCreate();
}

//implement exercise adding feature
return (
 <>
 <input type="text" placeholder="Workout Name" required ref={workoutName}>
 </input>
 <select className="form-select" aria-label="Default select example" ref={exerciseSelected} >
  <option selected="" disabled>Please select an exercise</option>
  {exercises?.map((exercise,index)=>{
    return (
    <option key={exercise.name}value={index}>
        {exercise.name}
    </option>
    );
  })}
</select>

<Button onClick={()=>addExercise()}> 
Add to Workout
</Button>
<Button onClick={()=>saveWorkout()}>
Workout complete
</Button>
<Button onClick={()=> closeCreate()}>
    Cancel
    </Button> 
{/* <Button onClick={()=>deleteExercise()}> 
-
</Button> */}

<div>
    {workouts?.map((exercise,index)=>{
        return (
            <>
        <div key={index}>
            {exercise.name}
        </div>
        <span onClick={()=>deleteExercise(index)}>
            X
        </span>
            </>

        );
      

    })}
    </div>

</>
);



}