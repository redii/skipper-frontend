import React, { Component } from 'react'
import { connect } from "react-redux"
import history from 'utils/history'
import './App.css'

import Navbar from './Navbar/Navbar.js'
import Sidebar from './Sidebar/Sidebar.js'
import View from './View/View.js'

import { Layout, Row, Col } from 'antd'
const { Content, Footer } = Layout

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
        <Layout style={{ background: '#fff' }}>
          <Row>
            <Col sm={0} md={2} xl={4}></Col>
            <Col md={20} xl={16}>
              <Content style={{ maxWidth: '1500px', background: '#fff' }}>
                <Layout style={{ padding: '48px 0', background: '#fff' }}>
                  <Sidebar />
                  <View />
                </Layout>
              </Content>
            </Col>
          </Row>
          <Footer style={{ textAlign: 'center', background: 'none' }}>
            © {new Date().getFullYear()} Henry Akmann - <a href="https://github.com/redii">Github</a>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
