import { loadData, saveData } from "../../utils/localStorage";
import { msgConstants } from "./actionTypes";

const msg = loadData("msg") || null;
const initState = {
  msg: msg
};

function reducer(state = initState, action) {
  switch (action.type) {
    case msgConstants.MSG_SUCCESS: {
      saveData("msg", action.payload.msg);
      return {
        ...state,
        msg: action.payload.msg
      };
    }
    default:
      return state;
  }
}

export default reducer;
