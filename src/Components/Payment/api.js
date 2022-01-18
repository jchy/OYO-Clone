import {
    getDataFailure,
    getDataRequest,
    getDataSucess
} from "../../redux/Checkout/action";

export const getData = (id) => (dispatch) => {
    // pre fetch
    const requestAction = getDataRequest();
    dispatch(requestAction);
    return fetch(`https://oyo-server.herokuapp.com/hotel?id=${id}`)
        .then((res) => res.json())
        .then((res) => {
            //success
            // let result = res.filter(item => item.id === id);
            const successAction = getDataSucess(res);
            dispatch(successAction);
        })
        .catch((res) => {
            // failure
            const failureAction = getDataFailure();
            dispatch(failureAction);
        });
};

async function sendData(data) {
    await fetch("https://oyouser.herokuapp.com/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}
async function sendHotelData(data) {
    await fetch("https://oyouser.herokuapp.com/booked_hotel", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json());
}
export { sendHotelData, sendData };