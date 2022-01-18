import { authConstants } from "./actionTypes";

export const loginSuccess = (token, mail, numb) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      token: token,
      mail: mail,
      numb: numb
    }
  };
};
export const logoutSuccess = () => {
  return {
    type: authConstants.LOGOUT_SUCCESS
  };
};
