import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import { Main } from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { setLogin } from './redux/loginReducer';

import './App.css';

const { Content, Footer } = Layout;

const App = () => {

  const dispatch = useDispatch()

  const setUser = (login: string) => {
    dispatch(setLogin(login))
  }

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : null;
    if (user != null) {
      setUser(user)
    }
  })

  return (
    <Layout className="layout">
      <BrowserRouter>
        <Nav />
        <Content className='wrap' style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Route path='/'
              render={() => <Main />} />
            <Route path='/news'
              render={() => <News />} />
            <Route path='/profile'
              render={() => <Profile />} />
            <Route path='/login'
              render={() => <Login />} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Voice</Footer>
      </BrowserRouter>
    </Layout>
  )
}

export default App
