import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
// import {
//   addHotelRoomFailure,
//   addHotelRoomRequest,
//   addHotelRoomSuccess
// } from "../redux/app/action";
import { addHotelRooms, getHotelRooms } from "./api";
// import ManageHotelAdmin from "./ManageHotelAdmin";
import DisplayHotel from "./DisplayHotel";

function Hotel() {
  const dispatch = useDispatch();
  // 1. write a getTodos function, once you are done with adding, invoke getTodos
  // 2.separate into a separate file
  const handleAdd = (text) => {
    dispatch(addHotelRooms(text)).then((res) => {
      dispatch(getHotelRooms());
    });
  };

  return (
    <div>
      <DisplayHotel />
    </div>
  );
}

export default Hotel;
