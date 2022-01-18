import {
  addHotelRoomFailure,
  addHotelRoomRequest,
  addHotelRoomSuccess,
  getHotelRoomFailure,
  getHotelRoomRequest,
  getHotelRoomSuccess
} from "../redux/app/action";
import axios from "axios";

export const getHotelRooms = (city) => (dispatch) => {
  // pre fetch
  let url = city ? `https://oyo-server.herokuapp.com/hotel?city=${city}` : "https://oyo-server.herokuapp.com/hotel";
  const requestAction = getHotelRoomRequest();
  dispatch(requestAction);
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //success
      console.log(res);
      const successAction = getHotelRoomSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = getHotelRoomFailure();
      dispatch(failureAction);
    });
};

export const addHotelRooms = (text) => (dispatch) => {
  const requestAction = addHotelRoomRequest();
  dispatch(requestAction);
  return fetch("https://oyo-server.herokuapp.com/hotel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: text,
      status: false
    })
  })
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = addHotelRoomSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = addHotelRoomFailure();
      dispatch(failureAction);
    });
};

export const fetchUserDetails =(token) =>{
  return fetch(`https://oyouser.herokuapp.com/booked_hotel?userId=${token}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
};

