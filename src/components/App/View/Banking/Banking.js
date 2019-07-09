import React, { Component } from 'react'
import axios from 'utils/axios'
import './Banking.css'

import { Upload, Table, Button, Icon, Tooltip, Statistic, message } from 'antd'

class Banking extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    // fetch uncategorized transactions or something
    axios.get('/api/banking/transactions').then((res) => {
      this.setState({
        data: res.data.transactions
      })
      console.log(res)
    })
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

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Date',
        dataIndex: 'date',
      },
      {
        title: 'Transactiondate',
        dataIndex: 'transactiondate',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
      }
    ]


    // TODO DATE TIMEZONE/FORMAT 



    return (
      <div id="Banking">
        <h2>Banking</h2>
        <hr />
        <div style={{float:"left", marginRight:"3em"}}>
          <Upload {...uploadProps}>
            <Tooltip placement="right" title="CSV-CAMT export file">
              <Button style={{marginLeft: "2em", marginTop: "1em"}}>
                <Icon type="upload" /> Import Transactions
              </Button>
            </Tooltip>
          </Upload>
        </div>
        <Statistic title="last upload" value="01.01.1970" style={{float:"left", marginRight:"2em"}} />
        <Statistic title="uncategorized" value={93} suffix="/ 100" />
        <Table columns={columns} dataSource={this.state.data} style={{marginTop:"2em"}} />
      </div>
    )
  }
}

export default Banking
