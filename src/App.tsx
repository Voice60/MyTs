import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './components/Login/LoginContainer';
import { Main } from './components/Main/Main';
import NavContainer from './components/Nav/NavContainer';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { setLogin } from './redux/loginReducer';



const {Content, Footer } = Layout;

const App = (props: any) => {

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : null;
    if (user != null) {
      props.setUser(user)
    }
  })

  return (
      <Layout className="layout">
        <BrowserRouter>
          <NavContainer />
          <Content className='wrap' style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Route path='/'
                render={() => <Main />} />
              <Route path='/news'
                render={() => <News />} />
              <Route path='/profile'
                render={() => <Profile />} />
              <Route path='/login'
                render={() => <LoginContainer />} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Voice</Footer>
        </BrowserRouter>
      </Layout>
  )
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (login: string) => {
      dispatch(setLogin(login))
    }
  }
}
export default connect(null, mapDispatchToProps)(App)
