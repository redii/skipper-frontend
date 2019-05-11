import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from '../../../../actions/view'
import './Home.css'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewName: 'Home'
    }
  }

  componentDidMount() {
    this.props.setCurrentView({ name: this.state.viewName })
  }

  render() {
    return (
      <div id="Home">
        Home
      </div>
    )
  }
}

export default connect(null, { setCurrentView })(Home)
