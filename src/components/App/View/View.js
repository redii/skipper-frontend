import React, { Component } from 'react'
import { Router, Switch } from 'react-router-dom'
import history from '../../../utils/history'
import './View.css'

import ViewRoutes from './ViewRoutes'

class View extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id="View">
        <h1>View</h1>
        <Router history={history}>
          <Switch>
            <ViewRoutes />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default View
