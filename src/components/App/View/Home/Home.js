import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from 'actions/view'
import axios from 'utils/axios'
import './Home.css'

import { Card, List, Badge } from 'antd'

const mapStateToProps = state => {
  return { auth: state.auth }
}

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('/api/home/announcements').then((res) => {
      this.setState({
        data: res.data.announcements
      })
    })
  }

  render() {
    return (
      <div id="Home">
        <h2>Hello <b>{this.props.auth.user.name}</b>!</h2>
        <hr />
        <Card
          title="Announcements"
          size="small"
          style={{ maxWidth: "700px" }}
          extra={<Badge count={this.state.data.length} />}>
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<span>{item.title}</span>}
                  description={item.body}/>
              </List.Item>
            )} />
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps, { setCurrentView })(Home)
