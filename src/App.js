import "./styles.css";

import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import AllRoutes from "./route/AllRoutes";
// import LeaveMsg from "./LeaveMsg/LeaveMsg";
// import Counter from "./Counter/Counter";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  // const token = useSelector((state) => state.auth.token);

  return isAuth ? (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  ) : (
    <Login />
  );
}

// * network requests

// * Working with local storage
// * Working with multiple reducers/ combining reducers
// * working with developer tools

// * middlewares
