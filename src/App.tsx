import { Main } from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import React from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import store from './redux/redux';
import LoginContainer from './components/Login/LoginContainer';

const App = () => {
  return (
    <Provider store={store} >
      <div>
        <BrowserRouter>
          <Nav />
          <Route path='/'
            render={() => <Main />} />
          <Route path='/news'
            render={() => <News />} />
          <Route path='/profile'
            render={() => <Profile />} />
          <Route path='/login'
            render={() => <LoginContainer />} />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
