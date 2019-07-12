import React, { Component } from 'react'
import axios from 'utils/axios'
import moment from 'moment'
import './Banking.css'

import { Upload, Table, Button, Select, Icon, Tooltip, Statistic, message } from 'antd'

class Banking extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      categories: [],
      statistic: {
        lastInsert: "",
        count: 0,
        uncategorizedCount: 0
      },
      selectedRowKeys: [],
      selectedCategory: ""
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount() {
    axios.get('/api/banking/transaction_uncategorized').then((res) => {
      this.setState({
        data: res.data.transactions
      })
    })
    axios.get('/api/banking/transaction_categories').then((res) => {
      this.setState({
        categories: res.data.transactionCategories
      })
    })
    axios.get('/api/banking/transaction_statistics').then((res) => {
      if (res.data.success) {
        this.setState({
          statistic: res.data.statistic
        })
      }
    })
  }

  handleSelect(event) {
    this.setState({
      selectedCategory: event
    })
  }

  handleSave() {
    if (this.state.selectedCategory && this.state.selectedRowKeys) {
      axios.post('/api/banking/transaction_categorize', {
        category: this.state.selectedCategory,
        transactions: this.state.selectedRowKeys
      }).then((res) => {
        if (res.data.success) {
          message.success(res.data.message)
          // TODO RELOAD TABLE
        } else {
          message.error(res.data.message)
        }
      })
    } else {
      message.error('Select a transaction and category before saving.')
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
        axios.post('/api/banking/import', data).then((res) => {
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

    let columns = [
      {
        title: 'Creditor',
        dataIndex: 'name',
      },
      {
        title: 'Transactiondate',
        dataIndex: 'transactiondate',
        render: date => <span>{moment(date).format('DD.MM.YYYY')}</span>
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        render: amount => <span>{amount}€</span>
      }
    ]

    let rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys: selectedRowKeys
        })
      }
    }

    return (
      <div id="Banking">
        <h2>Banking</h2>
        <hr />
        <div style={{float:"left", marginRight:"3em"}}>
          <Upload {...uploadProps}>
            <Tooltip placement="bottom" title="CSV-CAMT export file">
              <Button style={{marginLeft: "2em", marginTop: "1em"}}>
                <Icon type="upload" /> Import Transactions
              </Button>
            </Tooltip>
          </Upload>
        </div>
        <Statistic
          title="last insert"
          value={moment(this.state.statistic.lastInsert).format('DD. MMM YYYY')}
          style={{float:"left", marginRight:"2em"}} />
        <Statistic
          title="uncategorized"
          value={this.state.statistic.uncategorizedCount}
          suffix={"/ "+this.state.statistic.count} />
        <hr />
        <h4 style={{marginTop:"1em", marginBottom:"1em"}}>Uncategorized Transactions</h4>
        <Select
          placeholder="Select a category"
          onChange={this.handleSelect}
          style={{ width: 200 }}>
          {this.state.categories.map(category => (
            <Select.Option
              key={category._id}
              value={category.name}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
        <Button style={{marginLeft:"1em"}} onClick={this.handleSave}>Save</Button>
        <Table
          columns={columns}
          dataSource={this.state.data}
          rowKey={record => record._id}
          rowSelection={rowSelection}
          expandedRowRender={record => {
            return (
              <ul style={{ listStyleType:"none" }}>
                <li><b>Inserted</b>: {record.date}</li>
                <li><b>Usage</b>: {record.usage}</li>
                <li><b>Bookingtype</b>: {record.bookingtype}</li>
                <li><b>IBAN</b>: {record.iban}</li>
                <li><b>Info</b>: {record.info}</li>
              </ul>
            )
          }}
          style={{marginTop:"2em"}} />
      </div>
    )
  }
}

export default Banking
