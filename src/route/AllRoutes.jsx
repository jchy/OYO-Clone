import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../pages/Todo";
import Counter from "../pages/Counter";
import LeaveMsg from "../pages/LeaveMsg";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/todoapp">
        <Todo />
      </Route>
      <Route exact path="/counter">
        <Counter />
      </Route>
      <Route exact path="/leavemsg">
        <LeaveMsg />
      </Route>
    </div>
  );
};
export default AllRoutes;
