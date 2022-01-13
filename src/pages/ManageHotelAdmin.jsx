import { useState } from "react";

function ManageHotelAdmin({ onAdd }) {
  const [state, setState] = useState("");

  return (
    <div style={{ marginTop: "50px" }}>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Search for hotels"
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
        onClick={() => {
          onAdd(state);
          setState("");
        }}
        style={{
          height: "60px",
          borderRadius: "10px",
          padding: "5px",
          background: "aqua",
          width: "100px",
          fontSize: "18px",
          color: "black",
          fontSize: "24px"
        }}
      >
        Search
      </button>
    </div>
  );
}

export default ManageHotelAdmin;
