import { loadData, saveData, deleteData } from "../../utils/localStorage";
import { authConstants } from "./actionTypes";

const token = loadData("token") || null;
const mail = loadData("mail") || null;
const numb = loadData("numb") || null;

const initState = {
  isAuth: token !== null,
  token: token,
  mail: mail,
  numb: numb
};

function reducer(state = initState, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      saveData("mail", action.payload.mail);
      saveData("numb", action.payload.numb);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        mail: action.payload.mail,
        numb: action.payload.numb
      };
    }
    case authConstants.LOGOUT_SUCCESS: {
      deleteData("token")
      deleteData("mail")
      deleteData("numb")
      return {
        ...state,
        isAuth: false,
        token: null,
        mail: null,
        numb: null
      };
    }
    default:
      return state;
  }
}

export default reducer;

// 1. true
// 2. false
// 3. error
// 4. others
