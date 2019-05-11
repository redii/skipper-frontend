import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Signup.css'

import axios from 'axios'
import { Form, FormGroup, Col, Label, Input, Button, Alert, Collapse } from 'reactstrap'
import { BeatLoader } from 'react-spinners'

class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      usernameSignup: "",
      passwordSignup: "",
      passwordConfirmSignup: "",
      passwordConfirmCollapse: false,
      success: "",
      error: "",
      isLoading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  isValid() {
    return this.state.usernameSignup.length > 0 &&
           this.state.passwordSignup.length > 0 &&
           this.state.passwordConfirmSignup.length > 0 &&
           this.state.passwordSignup === this.state.passwordConfirmSignup
  }

  isError() {
    if (this.state.error) {
      return true
    }
  }

  isSuccess() {
    if (this.state.success) {
      return true
    }
  }

  toggleCollapse() {
    this.setState({ passwordConfirmCollapse: true })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid()) {
      this.setState({ isLoading: true })
      setTimeout(() => {
        axios.post('/api/user/signup', { user: this.state }).then(res => {
          if (res.data.success) {
            this.setState({ success: res.data.message, error: false, isLoading: false })
          } else {
            this.setState({ error: res.data.message, success: false, isLoading: false })
          }
        })
      }, 1000)
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div id="Signup">
        <h1>Signup</h1>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <Alert
            color="warning"
            hidden={!this.isError()}
          >{this.state.error}</Alert>
          <Alert
            color="success"
            hidden={!this.isSuccess()}
          >{this.state.success}</Alert>
          <FormGroup row>
            <Label for="usernameSignup" sm={3}>Username</Label>
            <Col sm={9}>
              <Input
                id="usernameSignup"
                type="text"
                value={this.state.usernameSignup}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="passwordSignup" sm={3}>Password</Label>
            <Col sm={9}>
              <Input
                id="passwordSignup"
                type="password"
                value={this.state.passwordSignup}
                onChange={this.handleChange}
                onFocus={this.toggleCollapse}
              />
            </Col>
          </FormGroup>
          <Collapse isOpen={this.state.passwordConfirmCollapse  	}>
            <FormGroup row>
              <Label for="passwordConfirmSignup" sm={5}>Confirm Password</Label>
              <Col sm={7}>
                <Input
                  id="passwordConfirmSignup"
                  type="password"
                  value={this.state.passwordConfirm}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
          </Collapse>
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

export default connect()(Signup)
