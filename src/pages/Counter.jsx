import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/action";
const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };
  return (
    <div>
      <h1
        style={{
          background: "aqua",
          padding: "10px",
          color: "white",
          border: "2px solid blue",
          borderRadius: "10px",
          width: "30px",
          margin: "auto",
          marginTop: "10px",
          color: "black"
        }}
      >
        {count}
      </h1>
      <button
        onClick={handleIncrement}
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
        INCREMENT
      </button>
      <button
        onClick={handleDecrement}
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
        DECREMENT
      </button>
    </div>
  );
};

export default Counter;
