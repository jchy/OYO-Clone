import { counterConstants } from "./actionTypes";

export const incrementCounter = (amount) => {
  return {
    type: counterConstants.INCREMENT_COUNTER,
    payload: {
      amount
    }
  };
};

export const decrementCounter = (amount) => {
  return {
    type: counterConstants.DECREMENT_COUNTER,
    payload: {
      amount
    }
  };
};
