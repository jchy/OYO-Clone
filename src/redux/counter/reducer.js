import { counterConstants } from "./actionTypes";

const initState = {
  count: 1
};

function reducer(state = initState, action) {
  console.log(action.amount, "hi");
  switch (action.type) {
    case counterConstants.INCREMENT_COUNTER: {
      return {
        ...state,
        count: state.count + action.payload.amount
      };
    }

    case counterConstants.DECREMENT_COUNTER: {
      return {
        ...state,
        count: state.count - action.payload.amount
      };
    }

    default:
      return state;
  }
}

export default reducer;
