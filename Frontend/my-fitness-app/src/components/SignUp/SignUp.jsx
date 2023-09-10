import { useState } from "react";


export const SignUp = () => {

    const [user,setUser] = useState([]);
    let userInfo = {
    name = 'Zekhai',
    weight = 170,
    bench = 205,
    squat = 205,
    deadlift = null,
    };
    localStorage.setItem("User",userInfo);
    
    const saveData = () => {
        localStorage.setItem("User",)

    }

    return (
        <Form>
        <Input onChange={(e)=>{
            console.log(e)
        }}>
        Name
        </Input>
        <Input>
        Age
        </Input>
        <Input>
        Bench Max
        </Input>
        <Input>
        Squat Max
        </Input>
        <Input>
        Deadlift Max
        </Input>
        <Button onClick={saveData()}>
            Submit
        </Button>
        </Form>

    );
}