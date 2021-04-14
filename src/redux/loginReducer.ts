const SET_AUTH = 'SET_AUTH'

type initialStateType = {
  isAuth: boolean
}

const initialState: initialStateType = {
  isAuth: false
}

const loginReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {

    case SET_AUTH:
      return {
        ...state,
        isAuth: !state.isAuth
      }

    default:
      return state
  }
}

type setAuthType = {
  type: typeof SET_AUTH
}

export const setAuth = (): setAuthType => ({ type: SET_AUTH })


export default loginReducer