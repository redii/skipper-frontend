import React, { Component } from 'react'
import { connect } from "react-redux"
import history from '../../utils/history'
import './App.css'

import Navbar from './Navbar/Navbar.js'
import Sidebar from './Sidebar/Sidebar.js'
import View from './View/View.js'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

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
        <Layout>
          <Content style={{ padding: '20px 100px 0', backgroundColor: '#fff' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={300} style={{ background: '#007' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                Content
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
            © {new Date().getFullYear()} Henry Akmann - Sourcecode can be found <a href="#">here</a>.
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
