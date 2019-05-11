import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <span className="text-muted">The sourcecode for this website is available on my <a href="github.com/redii" className="text-primary">Github</a>.</span>
      </footer>
    )
  }
}

export default Footer
