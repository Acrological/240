import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from '../components/SignUp/SignUp';
export const Landing = () => {
const [showModal,setShowModal] = useState(false);
const [showSignUp,setShowSignUp] = useState(true);
const userExists = JSON.parse(localStorage.getItem('User'));
// #todo User API CALL
const getUser = () => {
    const uData = await fetch ()
    }
useEffect(()=>{
    checkUser();
},[userExists])

const checkUser = () => {
    if(userExists != null){
        setShowSignUp(false)
    }
}
const showSignUpInfo = () => {
    console.log('button clicked');
    setShowModal(true);
}

    return (
        <>
            <center>
                <div>
                hi, this is the starting page
                </div>
                { showSignUp && 
                    <Button type="button" class="btn btn-primary" onClick={()=>{showSignUpInfo()}}>
                            Get Started
                     </Button>
                }
             {showModal && 
                    <SignUp/>
                    }
                 </center>
         </>
    );
}