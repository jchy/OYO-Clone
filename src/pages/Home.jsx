import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Redirect to="/login-signup" />;
  }
  return (
    <div>
      <h3>Home Page</h3>
    </div>
  );
};
export default Home;
