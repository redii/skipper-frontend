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
    component: Home,
    name: 'home'
  },
  {
    key: 1,
    path: '/app/admin',
    exact: true,
    component: Admin,
    name: 'admin'
  },
  {
    key: 2,
    path: '/app/gameserver',
    exact: true,
    component: Gameserver,
    name: 'gameserver'
  },
  {
    key: 3,
    path: '/app/banking',
    exact: true,
    component: Banking,
    name: 'banking'
  },
  {
    key: 4,
    path: '/app/upload',
    exact: true,
    component: Upload,
    name: 'upload'
  },
  {
    key: 5,
    path: '/app/monitoring',
    exact: true,
    component: Monitoring,
    name: 'monitoring'
  }
]

export default array
