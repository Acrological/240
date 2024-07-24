import { useState, useRef } from "react";
import bcrypt from 'bcryptjs'

export const SignUp = () => {

    const email = useRef()
    const name = useRef()
    const bench = useRef()
    const deadlift = useRef()
    const squat = useRef()
    const bodyWeight = useRef()
    const password = useRef()
    conspasswordassword = useRef()

    const salt = bcrypt.genSaltSync(10)

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

    const submitForm = () => {
      const hash = bcrypt.hashSync(password.current.value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
      if(cpassword.current.value === password.current.value){
        let User = {
          name:name.current.value,
          email:email.current.value,
          password:hash,
          weight:bodyWeight.current.value,
          bench:bench.current.value,
          squat:squat.current.value,
          deadlift:deadlift.current.value,
        }
        console.log(User);
      } else {
        alert('passwords do not match');
      }


    }
    return (
        <>
        signed up complete
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" ref={name} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" ref={email} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" class="form-control" ref={password} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" ref={cpassword} />
  </div>
  <div class="mb-3">
    <label for="weightinput" class="form-label">Weight</label>
    <input type="number" class="form-control" ref={bodyWeight} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Bench Max</label>
    <input type="number" class="form-control" ref={bench} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Squat Max</label>
    <input type="number" class="form-control" ref={squat} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Deadlift Max</label>
    <input type="number" class="form-control" ref={deadlift} />
  </div>
  <button type="submit" class="btn btn-primary" onClick={()=>submitForm()}>Submit</button>
</form>
 </>
    );
}