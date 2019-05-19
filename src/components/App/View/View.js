import React, { Component } from 'react'
import { Router, Switch } from 'react-router-dom'
import history from '../../../utils/history'
import './View.css'

import ViewRoutes from './ViewRoutes'

import { Layout } from 'antd'
const Content = Layout.Content

class View extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Content style={{ padding: '0 24px' }}>
        <Router history={history}>
          <Switch>
            <ViewRoutes />
          </Switch>
        </Router>
      </Content>
    )
  }
}

export default View
