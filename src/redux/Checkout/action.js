import { appConstants } from "./actionTypes";

export const getDataRequest = () => {
    return {
        type: appConstants.GET_DATA_REQUEST,
        payload: {
            isLoading: true
        }
    };
};

export const getDataSucess = (todos) => {
    return {
        type: appConstants.GET_DATA_SUCESS,
        payload: {
            todos: todos
        }
    };
};

export const getDataFailure = () => {
    return {
        type: appConstants.GET_DATA_FAILURE,
        payload: {
            isError: true
        }
    };
};