import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from 'actions/view'
import axios from 'utils/axios'
import './Users.css'

import { Table, Tag, Divider } from 'antd'

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
    dataIndex: 'admin',
    key: 'admin',
    width: '100px',
    render: isAdmin => {
       let color = isAdmin == 'true' ? 'green' : 'volcano'
       return (
          <Tag color={color} key={isAdmin}>
            {isAdmin.toUpperCase()}
          </Tag>
       )
    }
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    fixed: 'right',
    width: '150px',
    render: () => (
      <span>
        <a href="">delete</a>
        <Divider type="vertical" />
        <a href="">edit</a>
      </span>
    )
  }
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
        user.admin = user.admin ? "true" : "false"
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
        <hr />
        <Table
          rowKey="_id"
          dataSource={this.state.data}
          columns={columns}
          size="small"
          style={{ maxWidth: '800px' }}
          scroll={{ x: 500 }} />
      </div>
    )
  }
}

export default connect(null, { setCurrentView })(Users)
