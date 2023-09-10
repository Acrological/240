import Button from 'react-bootstrap/Button';


export const Landing = () => {

const SignUp = () => {
    console.log('button clicked');
}
    return (
        <>
            <center>
                <div>
                hi, this is the starting page
                </div>
                <Button type="button" class="btn btn-primary" onClick={SignUp()}>
                    Get Started
                </Button>
                </center>
         </>
    );
}