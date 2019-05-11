import React, { Component } from 'react'
import history from '../../../utils/history'
import './Sidebar.css'

import { ListGroup, ListGroupItem } from 'reactstrap'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: {
        home: true,
        admin: false,
        gameserver: false,
        banking: false,
        upload: false,
        monitoring: false
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    switch (event.target.id) {
      case 'showHome':
        this.setState({ show: { home: true } })
        history.push('/app/home')
        break
      case 'showAdmin':
        this.setState({ show: { admin: true } })
        history.push('/app/admin')
        break
      case 'showGameserver':
        this.setState({ show: { gameserver: true } })
        history.push('/app/gameserver')
        break
      case 'showBanking':
        this.setState({ show: { banking: true } })
        history.push('/app/banking')
        break
      case 'showUpload':
        this.setState({ show: { upload: true } })
        history.push('/app/upload')
        break
      case 'showMonitoring':
        this.setState({ show: { monitoring: true } })
        history.push('/app/monitoring')
        break
      default:
        this.setState({ show: { home: true } })
        history.push('/app/home')
        break
    }
  }

  render() {
    return (
      <div id="Sidebar">
        <h1>Sidebar</h1>
        <ListGroup>
          <ListGroupItem id="showHome" active={this.state.show.home} onClick={this.handleClick} tag="button" action>Home</ListGroupItem>
          <ListGroupItem id="showAdmin" active={this.state.show.admin} onClick={this.handleClick} tag="button" action>Administration</ListGroupItem>
          <ListGroupItem id="showGameserver" active={this.state.show.gameserver} onClick={this.handleClick} tag="button" action>Gameservers</ListGroupItem>
          <ListGroupItem id="showBanking" active={this.state.show.banking} onClick={this.handleClick} tag="button" action>Banking</ListGroupItem>
          <ListGroupItem id="showUpload" active={this.state.show.upload} onClick={this.handleClick} tag="button" action>Fileupload</ListGroupItem>
          <ListGroupItem id="showMonitoring" active={this.state.show.monitoring} onClick={this.handleClick} tag="button" action disabled>Monitoring</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default Sidebar
