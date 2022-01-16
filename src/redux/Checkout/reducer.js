import { appConstants } from "./actionTypes";

const initState = {
    todos: [],
    isLoading: true,
    isError: false
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case appConstants.GET_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        }
        case appConstants.GET_DATA_SUCESS: {
            return {
                ...state,
                todos: action.payload.todos,
                isLoading: false
            };
        }
        case appConstants.GET_DATA_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }
        default:
            return state;
    }
}