import { Button, Checkbox, Form, Input, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { stopSubmit } from 'redux-form';

import { setAuth } from '../../redux/loginReducer';
import { getIsAuth } from '../../redux/selectors/loginSelectors';
import styles from './Login.module.scss';

const { Title } = Typography;

const Login = () => {

  const isAuth = useSelector(getIsAuth)

  const dispatch = useDispatch()

  const setAuthData = (login: string, password: string) => {
    // fake auth
    if (login !== 'admin' || password !== 'admin') {
      dispatch(stopSubmit('login', { _error: 'Неверный логин или пароль' }))
    } else {
      dispatch(setAuth())
    }
  }

  const [form] = Form.useForm();

  let onSubmit = (formData: any) => {
    setAuthData(formData.login, formData.password)
    localStorage.setItem('rememberMe', formData.remember)
    localStorage.setItem('user', formData.remember ? formData.login : '')
  }

  if (isAuth) { return <Redirect to={'/'} /> }

  return (
    <div className={styles.formWrap}>
      <Title>Авторизация</Title>
      <Form
        form={form}
        name='basic'
        onFinish={onSubmit}>
        <Form.Item
          name='login'>
          <Input placeholder='login' />
        </Form.Item>
        <Form.Item
          name='password'>
          <Input.Password placeholder='password' />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </div>
  )
}


export default Login

