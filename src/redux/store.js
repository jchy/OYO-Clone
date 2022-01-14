import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import searchReducer from './Search/reducer'
import CheckoutReducer from './Checkout/reducer'

const rootReducer = combineReducers({ Search: searchReducer, Checkout: CheckoutReducer });


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));