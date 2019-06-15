import React, { Component } from 'react'
import axios from 'utils/axios'
import './Upload.css'

import { Upload as AntUpload, Icon, message } from 'antd'

class Upload extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let props = {
      name: 'file',
      multiple: false,
      customRequest: (options: any) => {
        let data = new FormData()
        data.append('upload', options.file)
        axios.post('/api/files/upload', data).then((res) => {
          if (res.data.success) {
            message.success(res.data.message)
          } else {
            message.error(res.data.message)
          }
        })
      },
      onChange(info) {
        console.log('info:', info)
        // TODO get status of fileupload and stop loadingcircle
      }
    }

    return (
      <div id="Upload">
        <h2>Upload</h2>
        <hr />
        <AntUpload.Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Currently only single file uploads are supported.
          </p>
        </AntUpload.Dragger>
      </div>
    )
  }
}

export default Upload
