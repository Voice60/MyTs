const SET_AUTH = 'SET_AUTH'
const SET_LOGIN = 'SET_LOGIN'

type initialStateType = {
  isAuth: boolean
  login: string | null
}

const initialState: initialStateType = {
  isAuth: false,
  login: null
}

const loginReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {

    case SET_AUTH:
      return {
        ...state,
        isAuth: true
      }
    case SET_LOGIN:
      return {
        ...state,
        isAuth: true,
        login: action.login
      }
    default:
      return state
  }
}

type setAuthType = {
  type: typeof SET_AUTH
}
type setLoginType = {
  type: typeof SET_LOGIN
  login: string
}

export const setAuth = (): setAuthType => ({ type: SET_AUTH })
export const setLogin = (login: string): setLoginType => ({ type: SET_LOGIN, login })



export default loginReducer