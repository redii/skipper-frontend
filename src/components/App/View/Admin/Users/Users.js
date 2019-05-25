import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from 'actions/view'
import axios from 'utils/axios'
import './Users.css'

import { Table } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Admin',
    dataIndex: 'isAdmin',
    key: 'admin',
  },
]

class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewName: 'Users'
    }
  }

  componentDidMount() {
    this.props.setCurrentView({ name: this.state.viewName })

    axios.get('/api/admin/users').then((res) => {
      var data = res.data.users.map((user) => {
        user.isAdmin = user.admin ? "true" : "false"
        return user
      })
      this.setState({
        data: data
      })
    })
  }

  render() {
    return (
      <div id="Users">
        <h2>Users</h2>
        <br />
        <Table
          rowKey="_id"
          dataSource={this.state.data}
          columns={columns}
          style={{ maxWidth: '800px' }} />
      </div>
    )
  }
}

export default connect(null, { setCurrentView })(Users)
