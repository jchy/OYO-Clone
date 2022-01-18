import "../Components/login_signup/Login_Signup.css";
import Left from "../Components/login_signup/Left";
import Right from "../Components/login_signup/Right";
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import Wizard from '../Wizard/Wizard';

function Login_Signup() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="main">
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
      {/* <Wizard /> */}
    </>
  );
}

export default Login_Signup;
