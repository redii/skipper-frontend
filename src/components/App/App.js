import React, { Component } from 'react'
import { connect } from "react-redux"
import { logout } from 'actions/auth'
import history from 'utils/history'
import './App.css'

import Navbar from './Navbar/Navbar.js'
import Sidebar from './Sidebar/Sidebar.js'
import View from './View/View.js'

import { Layout, Row, Col } from 'antd'
const { Content, Footer } = Layout

const mapStateToProps = state => {
  return { auth: state.auth, view: state.view }
}

class App extends Component {

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      history.push('/')
    } else {
      if (this.props.auth.expiresIn < (Date.now() / 1000)) {
        this.props.logout()
      }
    }
  }

  render() {
    return (
      <div id="App">
        <Navbar />
        <Layout style={{ background: '#fff' }}>
          <Row>
            <Col sm={0} md={2} lg={4} xxl={6}></Col>
            <Col sm={24} md={20} lg={16} xxl={12}>
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

export default connect(mapStateToProps, { logout })(App)
