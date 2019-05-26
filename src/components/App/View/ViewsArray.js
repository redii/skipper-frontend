import Home from './Home/Home.js'
import Admin from './Admin/Admin.js'
import Users from './Admin/Users/Users.js'
import Gameserver from './Gameserver/Gameserver.js'
import Banking from './Banking/Banking.js'
import Upload from './Upload/Upload.js'
import Monitoring from './Monitoring/Monitoring.js'

const array = [
  {
    key: 1,
    path: '/app/home',
    exact: true,
    component: Home,
    name: 'Home',
    icon: 'home',
    subs: []
  },
  {
    key: 2,
    path: '',
    exact: true,
    name: 'Adminpanel',
    icon: 'star',
    right: 'admin',
    subs: [
      {
        key: '2.1',
        path: '/app/admin/server',
        exact: true,
        component: Admin,
        name: 'Server',
        icon: 'cloud-server'
      },
      {
        key: '2.2',
        path: '/app/admin/users',
        exact: true,
        component: Users,
        name: 'Users',
        icon: 'usergroup-add'
      },
      {
        key: '2.3',
        path: '/app/admin/rights',
        exact: true,
        component: Admin,
        name: 'Rights',
        icon: 'unlock'
      }
    ]
  },
  {
    key: 3,
    path: '/app/upload',
    exact: true,
    component: Upload,
    name: 'Upload',
    icon: 'cloud-upload',
    subs: []
  },
  {
    key: 6,
    path: '/app/monitoring',
    exact: true,
    component: Monitoring,
    name: 'Monitoring',
    icon: 'line-chart',
    subs: []
  },
  {
    key: 4,
    path: '/app/gameserver',
    exact: true,
    component: Gameserver,
    name: 'Gameservers',
    icon: 'play-circle',
    subs: []
  },
  {
    key: 5,
    path: '/app/banking',
    exact: true,
    component: Banking,
    name: 'Banking',
    icon: 'bank',
    subs: []
  }
]

export default array
