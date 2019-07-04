import React, { Component } from 'react'
import axios from 'utils/axios'
import './Banking.css'

import { Row, Col, Upload, Button, Icon, Tooltip, Statistic, message } from 'antd'

class Banking extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // fetch uncategorized transactions or something
  }

  render() {
    let uploadProps = {
      name: 'file',
      multiple: false,
      showUploadList: false,
      customRequest: (options: any) => {
        let data = new FormData()
        data.append('upload', options.file)
        axios.post('/api/banking/upload', data).then((res) => {
          if (res.data.success) {
            message.success(res.data.message)
          } else {
            message.error(res.data.message)
          }
        })
      },
      onChange(info) {
        // console.log('info:', info)
      }
    }

    return (
      <div id="Banking">
        <h2>Banking</h2>
        <hr />
        <Row gutter={16}>
          <Col span={8}>
            <Upload {...uploadProps}>
              <Tooltip placement="right" title="CSV-CAMT export file">
                <Button style={{marginLeft: "2em", marginTop: "1em"}}>
                  <Icon type="upload" /> Import Transactions
                </Button>
              </Tooltip>
            </Upload>
          </Col>
          <Col span={16}>
            <Statistic title="uncategorized" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Banking
