import { msgConstants } from "./actionTypes";

export const msgSuccess = (msg) => {
  return {
    type: msgConstants.MSG_SUCCESS,
    payload: {
      msg: msg
    }
  };
};
