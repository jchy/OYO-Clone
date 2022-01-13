import "./styles.css";

import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import AllRoutes from "./route/AllRoutes";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  ) : (
    <Login />
  );
}
