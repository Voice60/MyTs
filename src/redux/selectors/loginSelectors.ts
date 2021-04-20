import { AppStateType } from "../redux";

export const getIsAuth = (state: AppStateType) => {
  return state.login.isAuth;
}

export const getUser = (state: AppStateType) => {
  return state.login.login;
}

