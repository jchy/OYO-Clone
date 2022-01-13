import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import searchReducer from './Search/reducer'

const rootReducer = combineReducers({ Search: searchReducer });

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());