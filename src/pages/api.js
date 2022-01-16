import {
  addHotelRoomFailure,
  addHotelRoomRequest,
  addHotelRoomSuccess,
  getHotelRoomFailure,
  getHotelRoomRequest,
  getHotelRoomSuccess
} from "../redux/app/action";

export const getHotelRooms = (city) => (dispatch) => {
  // pre fetch
  const requestAction = getHotelRoomRequest();
  dispatch(requestAction);
  return fetch(`https://oyo-server.herokuapp.com/hotel?city=${city}`)
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
