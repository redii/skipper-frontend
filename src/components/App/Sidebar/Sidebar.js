import React, { Component } from 'react'
import { connect } from "react-redux"
import history from '../../../utils/history'
import viewsArray from '../View/ViewsArray'
import { setCurrentView } from '../../../actions/view'
import './Sidebar.css'

import { Layout, Menu, Icon } from 'antd'
const Sider = Layout.Sider
const SubMenu = Menu.SubMenu

const mapStateToProps = state => {
  return { auth: state.auth }
}

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.setCurrentView({ name: event.item.props.name })
    history.push(event.item.props.path)
  }

  render() {
    var elements = viewsArray.map((view) => {
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
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        > {elements}
        </Menu>
      </Sider>
    )
  }
}

export default connect(mapStateToProps, { setCurrentView })(Sidebar)
