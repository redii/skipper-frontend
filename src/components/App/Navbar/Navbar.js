import React, { Component } from 'react'
import { connect } from "react-redux"
import { logout } from 'actions/auth'
import './Navbar.css'

import { Menu, Badge, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const mapStateToProps = state => {
  return { auth: state.auth }
}

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    return (
      <div id="Navbar">
        <h1>Skipper</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <SubMenu title={<Badge dot={true}><Icon type="notification" /></Badge>}>
            <Menu.Item key="setting:1">Sample Notification 1</Menu.Item>
            <Menu.Item key="setting:2">Sample Notification 2</Menu.Item>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" /></span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="user" />{this.props.auth.user.name}</span>}>
            <Menu.Item key="user:1">My Profile</Menu.Item>
            <Menu.Item key="user:2" onClick={this.handleLogout}>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
