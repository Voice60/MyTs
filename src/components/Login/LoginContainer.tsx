import React from 'react'
import { connect } from 'react-redux'
import { stopSubmit } from 'redux-form'
import { setAuth, setLogin } from '../../redux/loginReducer'
import Login from './Login'


const LoginContainer = (props: any) => {
  return (
    <Login isAuth={props.isAuth} setAuthData={props.setAuthData} setUser={props.setUser} />
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.login.isAuth
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAuthData: (login: string, password: string) => {
      // fake auth
      if (login !== 'admin' || password !== 'admin') {
        dispatch(stopSubmit('login', { _error: 'Неверный логин или пароль' }))
      } else {
        dispatch(setAuth())
      }
    },
    setUser: (login: string) => {
      dispatch(setLogin(login))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
