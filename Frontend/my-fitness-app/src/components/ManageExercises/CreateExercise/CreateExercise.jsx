import { useRef } from "react";
import Button from "react-bootstrap/esm/Button";


export const CreateExercise = ({closeExerciseCreation,updateList}) => {
    const exerciseName = useRef();
    const exerciseWeight = useRef();
    const arrayOfExercises = JSON.parse(localStorage.getItem('exercises')) || [];
    const addExercise = () => {
       const newExercise = exerciseName.current.value;
       const newWeight = exerciseWeight.current.value;
       const date = new Date();

       let exerciseData = 
        {
        name: newExercise,
        history : []
       }
       exerciseData.history.push({weightDate : date,
        weight : newWeight,})
       arrayOfExercises.push(exerciseData);

       localStorage.setItem('exercises',JSON.stringify(arrayOfExercises));
       updateList();
    }

    return (
        <>
        <center>
            <br />
        <label htmlFor="ExerciseName"> Exercise Name</label>
        <input type="text" ref={exerciseName} />
        <br>
        </br>
        <label htmlFor="ExerciseName">Current Max or Working Set weight</label>
        <input type="text" ref={exerciseWeight} />
        <Button onClick={()=>addExercise()}>
            Add
        </Button>
        <Button onClick={()=>closeExerciseCreation()}>
            Cancel
        </Button>
        </center>

        </>
    );
}