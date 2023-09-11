import { useRef } from "react";
import Button from "react-bootstrap/esm/Button";


export const CreateExercise = () => {
    const exerciseName = useRef();
    const allExercises = JSON.parse(localStorage.getItem('exercises'));
    //tweak later
    const addExercise = () => {
       const newExercise = exerciseName.current.value;
       allExercises.push(newExercise);
    }

    return (
        <>
        <label htmlFor="ExerciseName">Exercise Name</label>
        <input type="text" ref={exerciseName} />
        <Button onClick={()=>addExercise()}>
            Add
        </Button>
        <Button>
            Cancel
        </Button>
        </>
    );
}