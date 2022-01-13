// import axios from "axios";
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MuiImageSlider from "mui-image-slider";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// HOOkS
function UserDetails() {
  let { hotelDataArray, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  hotelDataArray = hotelDataArray.filter((rooms) => rooms.city === "Bangalore");
  const images = [
    hotelDataArray[0]?.poster,
    hotelDataArray[0]?.images[1],
    hotelDataArray[0]?.images[2],
    hotelDataArray[0]?.images[3]
  ];
  if (isLoading) return <div>...loading</div>;
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        style={{ height: "600px", width: "100%" }}
      >
        <img
          src={images[0]}
          className="sliderimg"
          alt=""
          height="600px"
          width="100%"
        />
        <img
          src={images[1]}
          className="sliderimg"
          alt=""
          height="600px"
          width="100%"
        />
        <img
          src={images[2]}
          className="sliderimg"
          alt=""
          height="600px"
          width="100%"
        />
        <img
          src={images[3]}
          className="sliderimg"
          alt=""
          height="600px"
          width="100%"
        />
      </AliceCarousel>
      <div>{hotelDataArray[0]?.name}</div>
    </>
  );
}

export default UserDetails;
