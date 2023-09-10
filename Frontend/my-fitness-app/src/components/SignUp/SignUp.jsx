import { useState } from "react";


export const SignUp = () => {

    const [user,setUser] = useState([]);

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