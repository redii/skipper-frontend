import React, { Component } from 'react'
import { connect } from "react-redux"
import './Home.css'

import { Typography, Card, List, Badge } from 'antd'

const mapStateToProps = state => {
  return { auth: state.auth }
}

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  }
]

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewName: 'Home'
    }
  }

  render() {
    return (
      <div id="Home">
        <h2>Hello {this.props.auth.user.name}!</h2>
        <br />
        <Card
          title="Announcements"
          size="small"
          style={{ maxWidth: "700px" }}
          extra={<Badge count={5} />}
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for web applications by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
