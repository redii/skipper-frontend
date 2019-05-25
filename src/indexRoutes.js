import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Homepage from 'components/Homepage/Homepage.js'
import App from 'components/App/App.js'

const array = [
  {
    key: 0,
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    key: 1,
    path: '/app',
    exact: false,
    component: App
  }
]

class IndexRoutes extends Component {
  render() {
    return array.map((route) => (
      <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))
  }
}

export default IndexRoutes
