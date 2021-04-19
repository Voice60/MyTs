import { Button, Checkbox, Form, Input, Typography } from 'antd';
import React from 'react';
import { Redirect } from 'react-router';
import styles from './Login.module.scss';


const { Title } = Typography;

const Login = (props: any) => {
  const [form] = Form.useForm();

  let onSubmit = (formData: any) => {
    props.setAuthData(formData.login, formData.password)
    localStorage.setItem('rememberMe', formData.remember)
    localStorage.setItem('user', formData.remember ? formData.login : '')
  }

  if (props.isAuth) { return <Redirect to={'/'} /> }

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

