import React, { Component } from 'react'
import axios from 'utils/axios'
import './Upload.css'

import {
  Upload as AntUpload,
  Icon,
  message,
  Table,
  Button
} from 'antd'

class Upload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.getherFiles = this.getherFiles.bind(this)
    this.handleAction = this.handleAction.bind(this)
  }

  componentDidMount() {
    this.getherFiles()
  }

  getherFiles() {
    axios.get('/api/files').then((res) => {
      this.setState({
        data: res.data.files
      })
    })
  }

  handleAction(event) {
    let props = event.target.attributes
    let file = this.state.data.find(file => file._id = props.fileid.value)

    switch(event.target.value) {
      case 'download':
        axios.get(`/api/files/download/${props.fileid.value}`, {
          responseType: 'blob'
        }).then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', file.name)
          document.body.appendChild(link)
          link.click()
        })
        break
      case 'delete':
        axios.post('/api/files/delete', {
          id: props.fileid.value
        }).then((res) => {
          if (res.data.success) {
            let newData = this.state.data.filter(r => r._id !== props.fileid.value)
            this.setState({ data: newData })
            message.success(res.data.message)
          } else {
            message.error(res.data.message)
          }
        })
        break
      default:
        break;
    }
  }

  render() {
    let uploadProps = {
      name: 'file',
      multiple: false,
      showUploadList: false,
      customRequest: (options: any) => {
        let data = new FormData()
        data.append('upload', options.file)
        axios.post('/api/files/upload', data).then((res) => {
          if (res.data.success) {
            message.success(res.data.message)
            this.getherFiles()
          } else {
            message.error(res.data.message)
          }
        })
      },
      onChange(info) {
        // console.log('info:', info)
      }
    }

    const columns = [
      {
        title: 'Filename',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: date => {
          let dateObj = new Date(date)
          let dd = dateObj.getDate()
          let mm = dateObj.getMonth()+1
          let yy = dateObj.getFullYear()
          return dd+'.'+mm+'.'+yy
        }
      },
      {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        render: size => (size / 1000000).toFixed(2) + ' MB'
      },
      {
        title: 'Actions',
        dataIndex: '_id',
        key: 'actions',
        fixed: 'right',
        width: '150px',
        render: _id => (
          <Button.Group>
            <Button value="download" size="small" type="primary" fileid={_id} onClick={this.handleAction}>download</Button>
            <Button value="delete" size="small" type="danger" fileid={_id} onClick={this.handleAction}>delete</Button>
          </Button.Group>
        )
      }
    ]

    return (
      <div id="Upload">
        <h2>Upload</h2>
        <hr />
        <div id="ant-upload-wrapper">
          <AntUpload.Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Currently only single file uploads are supported.
            </p>
          </AntUpload.Dragger>
        </div>
        <br/>
        <Table
          rowKey="_id"
          dataSource={this.state.data}
          columns={columns}
          size="small"
          scroll={{ x: 500 }} />
      </div>
    )
  }
}

export default Upload
