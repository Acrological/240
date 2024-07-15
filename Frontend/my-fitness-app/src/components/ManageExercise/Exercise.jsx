import { useEffect, useState,useRef} from "react";
import Button from "react-bootstrap/esm/Button";

export const Exercise = ({exercise,updateExercise,index}) => {
    // console.log('prop' + exercise)
    const recentWeight = exercise.history.length - 1;
    const exercises = JSON.parse(localStorage.getItem('exercises'));
    const exerciseHistory = [...exercise.history].reverse();
    const [showUpdateBox,setShowUpdateBox] = useState(false);
    const [current,setCurrent] = useState();
    const exerciseWeight = useRef();
    const [showHistory,setShowHistory] = useState(false);

    const openRecords = () => {
        setShowHistory(x => !x)
    }
    //TODO: Adjust and make method call act in parent component
    const deleteExercise = () => {
    //   const newList = [...exercises]
    //   console.log(newList[])
    //   newList.splice(,1);
    //   console.log(newList);
    //   localStorage.setItem('exercises',JSON.stringify(newList));
    //   setUpdateList(x => !x);
  }

// TODO: Refactor to adjust only this components data from the prop
    const updateWorkout = () =>{
      let newList = [...exercises]
      console.log(exercise.history);
      let listLength = exercise.history.length;
      console.log(listLength)
      setCurrent();
      const date = new Date();
          const newWeight = exerciseWeight.current.value
          exercise.history.push({weightDate : date,
              weight : newWeight,})
          newList[index] = exercise
          localStorage.setItem('exercises',JSON.stringify(newList));
        //   setUpdateList(x => !x);
        updateExercise();
          
      }

  
        return (

          <> 
           <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto" key={exercise.name}>
              <div className="fw-bold">{exercise.name}</div>
              Current Working Weight/Max: {exercise.history[recentWeight].weight}
             { showUpdateBox && <>
             <input type="number" ref={exerciseWeight} placeholder="Input New Weight" />
             <Button onClick={() => updateWorkout()}>Update Weight</Button>
             <Button onClick={() => setShowUpdateBox(x => !x)}>Cancel</Button>
             </> }
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
            <Button className="btn btn-danger" onClick={() => deleteExercise()}>Remove</Button>
            <Button className="btn btn-success" onClick={() => setShowUpdateBox(x => !x)} >Update</Button>
            <Button className="btn tbn-success"onClick={() => openRecords()} disabled={exerciseHistory.length <= 1}>History</Button>
          </li>
             </>
            );

};