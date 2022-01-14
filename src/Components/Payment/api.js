import {
    getDataFailure,
    getDataRequest,
    getDataSucess
} from "../../redux/Checkout/action";

export const getData = (id) => (dispatch) => {
    // pre fetch
    const requestAction = getDataRequest();
    dispatch(requestAction);
    return fetch("https://oyo-server.herokuapp.com/hotel")
        .then((res) => res.json())
        .then((res) => {
            //success
            let result = res.filter(item => item.id === id);
            const successAction = getDataSucess(result);
            dispatch(successAction);
        })
        .catch((res) => {
            // failure
            const failureAction = getDataFailure();
            dispatch(failureAction);
        });
};