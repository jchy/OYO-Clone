import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { msgSuccess } from "../redux/msg/action";
function LeaveMsg() {
  const dispatch = useDispatch();
  const [userMsg, setUserMsg] = useState("");
  const { msg } = useSelector((state) => state.msg);
  // console.log(printMsg, "hello");
  const handleAdd = () => {
    const action = msgSuccess(userMsg);
    dispatch(action);
  };
  return (
    <div>
      <h3
        style={{
          border: "1px solid gray",
          width: "40%",
          borderRadius: "20px",
          textAlign: "center",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
          height: "100px",
          background: "gray",
          padding: "10px"
        }}
      >
        {msg}
      </h3>
      <input
        type="text"
        placeholder="Leave a msg"
        onChange={(e) => setUserMsg(e.target.value)}
        style={{
          height: "50px",
          borderRadius: "10px",
          padding: "5px",
          background: "black",
          color: "white",
          width: "60%",
          fontSize: "18px",
          paddingLeft: "20px"
        }}
      />
      <button
        style={{
          height: "60px",
          borderRadius: "10px",
          padding: "5px",
          background: "aqua",
          width: "120px",
          // fontSize: "18px",
          color: "black",
          fontSize: "24px"
        }}
        onClick={handleAdd}
      >
        SEND➤
      </button>
    </div>
  );
}

export default LeaveMsg;
