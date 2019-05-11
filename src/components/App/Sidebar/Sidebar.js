import React, { Component } from 'react'
import history from '../../../utils/history'
import './Sidebar.css'

import { ListGroup, ListGroupItem } from 'reactstrap'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: {
        home: true,
        admin: false,
        gameserver: false,
        banking: false,
        upload: false,
        monitoring: false
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    switch (event.target.id) {
      case 'showHome':
        this.setState({ show: { home: true } })
        history.push('/app/home')
        break
      case 'showAdmin':
        this.setState({ show: { admin: true } })
        history.push('/app/admin')
        break
      case 'showGameserver':
        this.setState({ show: { gameserver: true } })
        history.push('/app/gameserver')
        break
      case 'showBanking':
        this.setState({ show: { banking: true } })
        history.push('/app/banking')
        break
      case 'showUpload':
        this.setState({ show: { upload: true } })
        history.push('/app/upload')
        break
      case 'showMonitoring':
        this.setState({ show: { monitoring: true } })
        history.push('/app/monitoring')
        break
      default:
        this.setState({ show: { home: true } })
        history.push('/app/home')
        break
    }
  }

  render() {
    return (
      <div id="Sidebar">
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="vertical"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <MenuItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Sidebar
