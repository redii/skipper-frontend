import React, { Component } from 'react'
import './HomeBox.css'

import { Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

class HomeBox extends Component {
  render() {

    return (
      <div id="HomeBox">
        <h1>Welcome</h1>
        <hr />
        <div className="text">
          <p className="lead">My name is <strong>Henry Akmann</strong> and I am a Software Developer from Hanover, Germany.</p>
          <p className="">I created this <strong>single-page webapplication</strong> in order to have a space where I can progressively add functionalities as I need them. The webapp itself is build on multiple different <strong>frameworks</strong>:</p>
          <Row>
            <Col md={{size: 6}}>
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>Frontend</ListGroupItemHeading>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="lead">React.js</ListGroupItemHeading>
                  <ListGroupItemText>
                    Enables modern and interactive frontend development.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="lead">Redux</ListGroupItemHeading>
                  <ListGroupItemText>
                    Introduces an app-wide global state via the 'react-redux' module, to store data in it.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="lead">Bootstrap</ListGroupItemHeading>
                  <ListGroupItemText>
                    CSS is provided by Bootstrap via the 'reactstrap' npm module.
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={{size: 6}}>
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>Backend</ListGroupItemHeading>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="lead">Express.js</ListGroupItemHeading>
                  <ListGroupItemText>
                    Provides an powerful yet lightweight webserver for the backend.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="lead">Mongoose</ListGroupItemHeading>
                  <ListGroupItemText>
                    Data is stored in an MongoDB and accessed using Mongoose.
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading className="lead">JsonWebToken</ListGroupItemHeading>
                  <ListGroupItemText>
                    Sessions are implentend using the 'jsonwebtoken' module.
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default HomeBox
