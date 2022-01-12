import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";
import msgReducer from "./msg/reducer";
import countReducer from "./counter/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  msg: msgReducer,
  count: countReducer
});

const networkRequestsMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("found an action which is a function");
    const func = action;
    return func(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

let enhancers = compose;

if (process.env.NODE_ENV !== "production") {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = enhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

console.log(store.getState());
