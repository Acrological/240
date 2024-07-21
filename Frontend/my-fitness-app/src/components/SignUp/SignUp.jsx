import { useState } from "react";


export const SignUp = () => {

    // const [user,setUser] = useState([]);
    // let userInfo = {
    // name :'Zekhai',
    // weight : 170,
    // bench : 205,
    // squat : 205,
    // deadlift : 10,
    // };
    // console.log(userInfo);
    // localStorage.setItem('User',JSON.stringify(userInfo));
    
    // const saveData = () => {
    //     localStorage.setItem("User",)

    // }

    return (
        <>
        signed up complete
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" />
  </div>
  <div class="mb-3">
    <label for="weightinput" class="form-label">Weight</label>
    <input type="number" class="form-control" id="weightinput" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Bench Max</label>
    <input type="email" class="form-control" id="benchmax" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </>
    );
}