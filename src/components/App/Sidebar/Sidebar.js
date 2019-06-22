import React, { Component } from 'react'
import { connect } from "react-redux"
import history from 'utils/history'
import viewsArray from '../View/ViewsArray'
import { setCurrentView } from 'actions/view'
import './Sidebar.css'

import { Layout, Menu, Icon } from 'antd'
const Sider = Layout.Sider
const SubMenu = Menu.SubMenu

const mapStateToProps = state => {
  return { auth: state.auth, view: state.view }
}

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let item = event.item.props
    this.props.setCurrentView({ key: event.key, name: item.name, path: item.path })
    history.push(event.item.props.path)
  }

  render() {
    var elements = viewsArray.map((view) => {
      if (this.props.auth.isAuthenticated && this.props.auth.permissions) {
        if (this.props.auth.permissions.includes(view.right) || !view.right) {
          if (view.subs.length > 0) {
            var subelements = view.subs.map((subview) => {
              return (
                <Menu.Item
                  key={subview.key}
                  name={subview.name}
                  path={subview.path}
                  onClick={this.handleClick}
                >
                  <Icon type={subview.icon} />
                  <span>{subview.name}</span>
                </Menu.Item>
              )
            })
            return (
              <SubMenu
                key={view.key}
                name={view.name}
                title={
                  <span>
                    <Icon type={view.icon} />
                    <span>{view.name}</span>
                  </span>}
              > {subelements}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item
                key={view.key}
                name={view.name}
                path={view.path}
                onClick={this.handleClick}
              >
                <Icon type={view.icon} />
                <span>{view.name}</span>
              </Menu.Item>
            )
          }
        }
      }
      return null
    })

    return (
      <Sider
        width={300}
        breakpoint="lg"
        theme="light"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[this.props.view.currentView.key]}
          style={{ height: '100%' }}
        > {elements}
        </Menu>
      </Sider>
    )
  }
}

export default connect(mapStateToProps, { setCurrentView })(Sidebar)
