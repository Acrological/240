import { useRef } from "react";
import bcrypt from 'bcryptjs';

export const Login = () => {

    const password = useRef();
    const email = useRef();
    const loginUser = () => {
        const hash = bcrypt.hashSync(password.current.value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
        let User = {
            email:email.current.value,
            password:hash,
        }
        console.log(User);
    }

    return (
        <>
        <form>
            Login
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" ref={email} />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Password</label>
        <input type="password" class="form-control" ref={password} />
      </div>
      <button type="submit" class="btn btn-primary" onClick={()=>submitForm()}>Submit</button>
      </form>
        </>
    );


}