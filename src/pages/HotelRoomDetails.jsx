// import axios from "axios";
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import MuiImageSlider from "mui-image-slider";
import MuiImageSlider from "mui-image-slider";

// HOOkS
function UserDetails() {
  let { hotelDataArray, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  console.log(hotelDataArray, "hii");
  const { id } = useParams();
  hotelDataArray = hotelDataArray.filter((rooms) => rooms.city === "Bangalore");
  const images = [
    hotelDataArray[0].poster,
    hotelDataArray[0].images[1],
    hotelDataArray[0].images[2],
    hotelDataArray[0].images[3]
  ];
  if (isLoading) return <div>...loading</div>;
  return (
    <>
      <div>{hotelDataArray[0].name}</div>
      <MuiImageSlider images={images} />
    </>
  );
}

export default UserDetails;
