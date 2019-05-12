import React, { Component } from 'react'
import { connect } from "react-redux"
import history from '../../utils/history'
import './App.css'

import Navbar from './Navbar/Navbar.js'
import Sidebar from './Sidebar/Sidebar.js'
import View from './View/View.js'

import { Layout } from 'antd'
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
          <Content style={{ margin: '0 auto', maxWidth: '1500px', padding: '20px 0', background: '#fff' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sidebar />
              <View />
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
            © {new Date().getFullYear()} Henry Akmann - <a href="https://github.com/redii">Github</a>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
