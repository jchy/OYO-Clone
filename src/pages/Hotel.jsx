import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addHotelRooms, getHotelRooms } from "./api";
import DisplayHotel from "./DisplayHotel";

function Hotel() {
  const dispatch = useDispatch();
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
