import React, { Component } from 'react'
import { connect } from "react-redux"
import history from '../../utils/history'
import './App.css'

import { Container, Row, Col } from 'reactstrap'
import Navbar from './Navbar/Navbar.js'
import Sidebar from './Sidebar/Sidebar.js'
import View from './View/View.js'

const mapStateToProps = state => {
  return { auth: state.auth }
}

class App extends Component {

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      history.push('/')
    }
  }

  render() {
    return (
      <div id="App">
        <Navbar />
        <Container fluid>
          <Row>
            <Col md={{ size: 2, offset: 2 }}>
              <Sidebar />
            </Col>
            <Col xs={{ size: 6 }}>
              <View />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
