import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from 'actions/view'
import axios from 'utils/axios'
import './Users.css'

import { Table, Button, Tag, message } from 'antd'

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
      var data = res.data.users.map((user) => {
        user.admin = user.admin ? "true" : "false"
        return user
      })
      this.setState({
        data: data
      })
    })
  }

  handleAction(event) {
    let props = event.target.attributes
    switch(event.target.value) {
      case 'delete':
        axios.post('/api/admin/users/delete', {
          id: props.userid.value
        }).then((res) => {
          if (res.data.success) {
            let newData = this.state.data.filter(r => r._id !== props.userid.value)
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
        dataIndex: 'admin',
        key: 'admin',
        width: '100px',
        render: isAdmin => {
           let color = isAdmin === 'true' ? 'green' : 'volcano'
           return (
              <Tag color={color} key={isAdmin}>
                {isAdmin.toUpperCase()}
              </Tag>
           )
        }
      },
      {
        title: 'Actions',
        dataIndex: '_id',
        key: 'actions',
        fixed: 'right',
        width: '150px',
        render: _id => (
          <Button.Group>
            <Button value="edit" size="small" type="primary" userid={_id} onClick={this.handleAction} disabled>edit</Button>
            <Button value="delete" size="small" type="danger" userid={_id}  onClick={this.handleAction}>delete</Button>
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
