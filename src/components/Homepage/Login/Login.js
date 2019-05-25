import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from 'actions/auth'
import './Login.css'

import { Form, FormGroup, Col, Label, Input, Button, UncontrolledAlert } from 'reactstrap'
import { BeatLoader } from 'react-spinners'

const mapStateToProps = state => {
  return { auth: state.auth }
}

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      error: false,
      isLoading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  isValid() {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid()) {
      this.setState({ isLoading: true })
      setTimeout(() => {
        this.props.login(this.state).then(() => {
          if (!this.props.auth.isAuthenticated) {
            this.setState({ isLoading: false, error: 'Incorrect username or password.' })
          }
        })
      }, 500)
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div id="Login">
        <h1>Login</h1>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <UncontrolledAlert
            color="warning"
            hidden={!this.state.error}>
            {this.state.error}
          </UncontrolledAlert>
          <FormGroup row>
            <Label for="username" sm={3}>Username</Label>
            <Col sm={9}>
              <Input
                id="username"
                type="text"
                placeholder="admin"
                value={this.state.username}
                onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={3}>Password</Label>
            <Col sm={9}>
              <Input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{ size: 4, offset: 4 }}>
              <Button
                outline
                color="primary"
                size="md"
                disabled={!this.isValid()}>
                <span hidden={this.state.isLoading}>Submit</span>
                <BeatLoader
                  sizeUnit={"px"}
                  size={7}
                  loading={this.state.isLoading}/>
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

}

export default connect(mapStateToProps, { login })(Login)
