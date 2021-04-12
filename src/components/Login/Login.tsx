import React from 'react'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'input'} placeholder={'логин'} name={'login'}></Field>
      <Field component={'input'} placeholder={'пароль'} name={'password'} type={'password'}></Field>
      {props.error && <p>{props.error}</p>}
      <button>Войти</button>
    </form>
  )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {

  props.isAuth && <Redirect to={'/'} />

  let onSubmit = (formData: any) => {
    props.setAuthData(formData.login, formData.password)}

  return (
    <div>
    <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}


export default Login

