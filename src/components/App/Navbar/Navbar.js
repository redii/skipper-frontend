import React, { Component } from 'react'
import { connect } from "react-redux"
import { logout } from '../../../actions/auth'
import './Navbar.css'

import {
  Collapse,
  Navbar as NavbarBS,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const mapStateToProps = state => {
  return { auth: state.auth }
}

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    return (
      <div id="Navbar">
        <NavbarBS color="dark" dark expand="md">
          <NavbarBrand href="/">BRAND_NAME</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/redii/webapp-frontend">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="active">
                  {this.props.auth.user.name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Profile
                  </DropdownItem>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogout}>
                    <b>Logout</b>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </NavbarBS>
      </div>
    )
  }
}

export default connect(mapStateToProps, { logout })(Navbar)
