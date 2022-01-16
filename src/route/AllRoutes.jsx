import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Hotel from "../pages/Hotel";
import Login from "../pages/Login";
import CheckOut from "../pages/CheckOut";
import HotelRoomDetails from "../pages/HotelRoomDetails";
import Allcities from "../pages/Allcities";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/oyorooms">
        <Hotel />
      </Route>
      <Route exact path="/oyoroomsk">
        <Hotel />
      </Route>
      <Route exact path="/login-signup">
        <Login />
      </Route>
      <Route exact path="/oyorooms/:city/:id">
        <HotelRoomDetails />
      </Route>
      <Route exact path="/payment/:id">
        <CheckOut />
      </Route>
      <Route exact path="/allcities">
        <Allcities/>
      </Route>
    </div>
  );
};
export default AllRoutes;
