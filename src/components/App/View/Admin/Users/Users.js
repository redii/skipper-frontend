import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from 'actions/view'
import axios from 'utils/axios'
import './Users.css'

import { Table, Button, Tag, Popconfirm, message } from 'antd'

class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.handleAction = this.handleAction.bind(this)
  }

  componentDidMount() {
    axios.get('/api/admin/users').then((res) => {
      this.setState({
        data: res.data.users
      })
    })
  }

  handleAction(action, _id) {
    switch(action) {
      case 'delete':
        axios.post('/api/admin/users/delete', {
          id: _id
        }).then((res) => {
          if (res.data.success) {
            let newData = this.state.data.filter(r => r._id !== _id)
            this.setState({ data: newData })
            message.success(res.data.message)
          } else {
            message.error(res.data.message)
          }
        })
        break;

      case 'edit':
        break;

      default:
        break;
    }
  }

  render() {
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
        dataIndex: 'permissions',
        key: 'admin',
        width: 'auto',
        render: permissions => {
          return permissions.map(permission => {
            let color = permission === 'admin' ? 'magenta' : 'blue'
            return (
              <Tag color={color} key={permission}>
                {permission}
              </Tag>
            )
          })
        }
      },
      {
        title: 'Actions',
        dataIndex: '_id',
        key: 'actions',
        fixed: 'right',
        width: '110px',
        render: _id => (
          <Button.Group>
            <Button
              value="edit"
              size="small"
              type="primary"
              onClick={() => this.handleAction('edit', _id)}
              disabled
            >
              edit
            </Button>
            <Popconfirm
              placement="right"
              title="Are you sure?"
              onConfirm={() => this.handleAction('delete', _id)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                value="delete"
                size="small"
                type="danger"
              >
                delete
              </Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ]

    return (
      <div id="Users">
        <h2>Users</h2>
        <hr />
        <p>Currently registered users:</p>
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
