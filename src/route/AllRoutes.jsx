import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Hotel from "../pages/Hotel";

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
    </div>
  );
};
export default AllRoutes;
