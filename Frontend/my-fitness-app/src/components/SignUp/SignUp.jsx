import { useState } from "react";


export const SignUp = () => {

    const email = useRef()
    const name = useRef()
    const bench = useRef()
    const deadlift = useRef()
    const squat = useRef()
    const bodyWeight = useRef()
    const password = useRef()
    const cpwassword = useRef()

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
    <input type="text" class="form-control" ref="name" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" ref="email" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="text" class="form-control" ref="password" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
    <input type="text" class="form-control" ref="cpassword" />
  </div>
  <div class="mb-3">
    <label for="weightinput" class="form-label">Weight</label>
    <input type="number" class="form-control" ref="bodyWeight" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Bench Max</label>
    <input type="number" class="form-control" ref="bench" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Squat Max</label>
    <input type="number" class="form-control" ref="squat" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Deadlift Max</label>
    <input type="number" class="form-control" ref="deadlift" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
 </>
    );
}