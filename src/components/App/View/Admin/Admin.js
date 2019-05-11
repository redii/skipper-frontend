import React, { Component } from 'react'
import { connect } from "react-redux"
import { setCurrentView } from '../../../../actions/view'
import './Admin.css'

class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewName: 'Admin'
    }
  }

  componentDidMount() {
    this.props.setCurrentView({ name: this.state.viewName })
  }

  render() {
    return (
      <div id="Admin">
        Admin
      </div>
    )
  }
}

export default connect(null, { setCurrentView })(Admin)
