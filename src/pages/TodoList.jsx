import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/app/action";
import { getTodos } from "./api";

function TodoItem({ name, location, city, description, rating, price }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        gap: "2rem",
        border: "1px solid gray",
        borderRadius: "20px",
        background: "green",
        margin: "20px"
      }}
    >
      <div
        style={{
          background: "black",
          padding: "10px",
          fontSize: "17px",
          color: "white",
          border: "2px solid blue",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        {name}
      </div>
      <div> Rating: {rating} </div>
      <div>₹: {price}</div>
      <div
        style={{
          background: "black",
          padding: "10px",
          fontSize: "17px",
          color: "white",
          border: "2px solid blue",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        {location}
      </div>
      <div>{city}</div>
    </div>
  );
}

function TodoList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();

  // console.log(count)

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <div>
            <h2>Filters</h2>
          </div>
          <div>
            <h5>Popular locations in Delhi, India</h5>
          </div>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <div></div>
        </div>
        <div style={{ width: "60%", margin: "auto" }}>
          {isLoading && <h3>Loading...</h3>}
          {isError && <h3> Something went wrong!</h3>}
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              {...item}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
