import { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/esm/Button";

export const CreateWorkout = (closeCreate) => {
const exercisesStored = JSON.parse(localStorage.getItem('exercises'));
const [exercises,setExercises] = useState([])
const [workouts,setWorkouts] = useState([])
const exerciseSelected = useRef();
useEffect(()=>{
    if(exercisesStored !== exercises){
        console.log(exercisesStored);
            setExercises(exercisesStored)
    }

},[])

const addExercise = () => {
    const workoutRoutine = [...workouts];
    const addedExercise = exercises[exerciseSelected.current.value]
    workoutRoutine.push(addedExercise);
    setWorkouts(workoutRoutine);
}
const deleteExercise = () => {

}



//implement exercise adding feature
return (
 <>
 <select className="form-select" aria-label="Default select example" ref={exerciseSelected}>
  <option >Please select an exercise</option>
  {exercises?.map((exercise,index)=>{
    return (
    <option value={index}>
        {exercise.name}
    </option>
    );
  })}
</select>

<Button onClick={()=>addExercise()}> 
Add to Workout
</Button>
<Button>
Workout complete
</Button>
{/* <Button onClick={()=>deleteExercise()}> 
-
</Button> */}
<div>
    {workouts?.map((exercise,index)=>{
        return (
        <div key={exercise.name}>
            {exercise.name}
        </div>

        );
      

    })}
    </div>

</>
);



}