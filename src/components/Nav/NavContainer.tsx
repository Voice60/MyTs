import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

const NavContainer = (props: any) => {
  return (
    <Nav isAuth={props.isAuth} user={props.user} />
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.login.isAuth,
    user: state.login.login
  }
}
export default connect(mapStateToProps, null)(NavContainer)