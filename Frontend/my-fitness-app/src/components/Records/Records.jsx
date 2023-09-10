import { useState } from "react";


export const PersonalRecords = () => {
//incorporate graph functionality
    const records = JSON.parse(localStorage.getItem('records'));
    const [recordsList,setRecordsList] = useState([]);

    return (
    <>
    <div>
    Current Body weight: {records?.weight}
    </div>
    <div>
    Current Bench max: {records?.max}
    </div>
    <div>
    Current Squat max: {records?.squat}
    </div>
    <div>
    Current Deadlift max: {records?.deadlift}
    </div>
    </>

);
}