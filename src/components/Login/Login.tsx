import React from 'react'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'

import styles from './Login.module.scss'

const LoginForm = (props: any) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <Field className={styles.item} component={'input'} placeholder={'логин'} name={'login'}></Field>
      <Field className={styles.item} component={'input'} placeholder={'пароль'} name={'password'} type={'password'}></Field>
      {props.error && <p className={styles.error}>{props.error}</p>}
      <button className={styles.button}>Войти</button>
    </form>
  )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {

  if (props.isAuth) { return <Redirect to={'/'} /> }

  let onSubmit = (formData: any) => {
    props.setAuthData(formData.login, formData.password)}

  return (
    <div className={styles.formWrap}>
    <h1 className={styles.title}>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}


export default Login

