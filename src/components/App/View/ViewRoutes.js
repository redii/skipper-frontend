import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import viewsArray from './ViewsArray.js'

class ViewRoutes extends Component {
  render() {
    return viewsArray.map((route) => (
      <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))
  }
}

export default ViewRoutes
