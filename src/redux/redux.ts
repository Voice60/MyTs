import { reducer as formReducer } from 'redux-form'

import { combineReducers, createStore } from "redux";

import loginReducer from "./loginReducer";

let reducers = combineReducers({
  login: loginReducer,
  form: formReducer
})
// @ts-ignore
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// let store = createStore(reducers)
export default store