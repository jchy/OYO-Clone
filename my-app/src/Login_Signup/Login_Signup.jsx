import './Component/Login_Signup.css';
import Left from './Component/Left';
import Right from './Component/Right';
import Error from '../Error/Error';

function Login_Signup() {
    return (
      <>
        <div className='main'>
            <div className="left">
                <Left />
            </div>
            <div className="right">
                <Right />
            </div>
        </div>
        {/* <Error /> */}
      </>
    );
  }
  
  export default Login_Signup;