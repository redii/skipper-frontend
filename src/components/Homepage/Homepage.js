import React, { Component } from 'react'
import { connect } from "react-redux"
import history from 'utils/history'
import './Homepage.css'

import { UncontrolledCollapse } from 'reactstrap'
import { Radio } from 'antd'
import HomeBox from './Home/HomeBox.js'
import Signup from './Signup/Signup.js'
import Login from './Login/Login.js'
import Footer from './Footer/Footer.js'

const mapStateToProps = state => {
  return { auth: state.auth }
}

class Homepage extends Component {

  constructor() {
    super()
    this.state = {
      collapse: {
        homeBox: true,
        loginForm: false,
        signupForm: false
      }
    }
    this.toggleButtonGroup = this.toggleButtonGroup.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      history.push('/app')
    }
  }

  toggleButtonGroup(event) {
    if (event.target.id === 'homeBoxButton') this.setState(state => ({ collapse: { homeBox: true } }))
    if (event.target.id === 'loginFormButton') this.setState(state => ({ collapse: { loginForm: true } }))
    if (event.target.id === 'signupFormButton') this.setState(state => ({ collapse: { signupForm: true } }))
  }

  render() {
    return (
      <div id="Homepage">
        <div id="HomepageButtonGroup" className="text-center">
          <Radio.Group>
            <Radio.Button
              id="homeBoxButton"
              onClick={this.toggleButtonGroup}>
              Home
            </Radio.Button>
            <Radio.Button
              id="loginFormButton"
              onClick={this.toggleButtonGroup}>
              Login
            </Radio.Button>
            <Radio.Button
              id="signupFormButton"
              onClick={this.toggleButtonGroup}>
              Signup
            </Radio.Button>
          </Radio.Group>
        </div>
        <UncontrolledCollapse
          isOpen={this.state.collapse.homeBox}
          toggler="#homeBoxButton">
          <HomeBox />
        </UncontrolledCollapse>
        <UncontrolledCollapse
          isOpen={this.state.collapse.loginForm}
          toggler="#loginFormButton">
          <Login />
        </UncontrolledCollapse>
        <UncontrolledCollapse
          isOpen={this.state.collapse.signupForm}
          toggler="#signupFormButton">
          <Signup />
        </UncontrolledCollapse>
        <Footer />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Homepage)
