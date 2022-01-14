import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSuccess } from "../redux/auth/action";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
  };
  let auth = useSelector((state) => state.auth, shallowEqual);

  if (auth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleLogin}>Please click on this to login</button>
    </div>
  );
}

export default Login;
