import { useEffect, useState,useRef} from "react";
import Button from "react-bootstrap/esm/Button";

export const Exercise = ({exercise,updateExercise}) => {
    // console.log('prop' + exercise)
    const recentWeight = exercise.history.length - 1;
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
      const newList = [...exercise];
      console.log(newList.history);

    //   setShowUpdateBox(x => !x);
    //   setCurrent();
    //   const date = new Date();
    //   if(showUpdateBox == true){
    //   if(exercises[].history[listLength].weight === exerciseWeight.current.value){
    //       console.log('same value');
    //   }
    //   else if(exerciseWeight.current.value < 0){
    //       console.log('no negative value');
    //   } 
    //   else if (exerciseWeight.current.value > 0 ){
    //       const newWeight = exerciseWeight.current.value
    //       newList[].history.push({weightDate : date,
    //           weight : newWeight,})
    //       localStorage.setItem('exercises',JSON.stringify(newList));
    //       setUpdateList(x => !x);
          
    //   } else {
    //           console.log(exerciseWeight.current.value + ' equates to no value');
    //   }
      }

  
        return (

          <> 
           <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto" key={exercise.name}>
              <div class="fw-bold">{exercise.name}</div>
              Current Working Weight/Max: {exercise.history[recentWeight].weight}
             { showUpdateBox && <input type="text" ref={exerciseWeight} placeholder="Input New Weight" error={!(exerciseWeight.current.value >= 0)}/> }
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
            <Button className="btn btn-success" onClick={() => updateWorkout()} >Update</Button>
            <Button className="btn tbn-success"onClick={() => openRecords()} disabled={exerciseHistory.length <= 1}>History</Button>
          </li>
             </>
            );

};