import React, { Component } from 'react'
import history from '../../../utils/history'
import viewsArray from '../View/ViewsArray'
import './Sidebar.css'

import { Layout, Menu, Icon } from 'antd'
const Sider = Layout.Sider
const SubMenu = Menu.SubMenu

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    history.push(event.item.props.path)
  }

  render() {
    var elements = viewsArray.map((view) => {
      if (view.subs.length > 0) {
        var subelements = view.subs.map((subview) => {
          return <Menu.Item key={subview.key} path={subview.path} onClick={this.handleClick}><Icon type={subview.icon} />{subview.name}</Menu.Item>
        })
        return <SubMenu key={view.key} title={<span><Icon type={view.icon} />{view.name}</span>}>{subelements}</SubMenu>
      } else {
        return <Menu.Item key={view.key} path={view.path} onClick={this.handleClick}><Icon type={view.icon} />{view.name}</Menu.Item>
      }
    })

    return (
      <Sider width={300} style={{ background: '#007' }}>
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

export default Sidebar
