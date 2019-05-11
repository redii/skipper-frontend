import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './Home/Home.js'
import Admin from './Admin/Admin.js'
import Gameserver from './Gameserver/Gameserver.js'
import Banking from './Banking/Banking.js'
import Upload from './Upload/Upload.js'
import Monitoring from './Monitoring/Monitoring.js'

const array = [
  {
    key: 0,
    path: '/app/home',
    exact: true,
    component: Home
  },
  {
    key: 1,
    path: '/app/admin',
    exact: true,
    component: Admin
  },
  {
    key: 2,
    path: '/app/gameserver',
    exact: true,
    component: Gameserver
  },
  {
    key: 3,
    path: '/app/banking',
    exact: true,
    component: Banking
  },
  {
    key: 4,
    path: '/app/upload',
    exact: true,
    component: Upload
  },
  {
    key: 5,
    path: '/app/monitoring',
    exact: true,
    component: Monitoring
  }
]

class ViewRoutes extends Component {
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

export default ViewRoutes
