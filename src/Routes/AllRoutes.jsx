import { Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import HotelDetails from "../pages/HotelDetails";
import Hotels from "../pages/Hotels";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/hotels">
        <Hotels />
      </Route>
      <Route exact path="/hoteldetails">
        <HotelDetails />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </div>
  );
}

export default AllRoutes;
