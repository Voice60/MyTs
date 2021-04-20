import loginReducer from "./loginReducer";
import { reducer as formReducer } from 'redux-form'

import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
  login: loginReducer,
  form: formReducer
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

// @ts-ignore
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// let store = createStore(reducers)
export default store