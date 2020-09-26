import React, { Component } from "react";

import "./navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbar-items">
        <code className="navbar-logo first-name">
          matthew<span className="last-name">szeto</span>
        </code>
        <a
          className="nav-left-btn"
          href="https://www.linkedin.com/in/matthewszeto/"
        >
          linkedin <b>connect</b>
        </a>
        <a className="nav-right-btn" href="https://github.com/mattszeto">
          github <b>follow</b>
        </a>
      </nav>
    );
  }
}

export default Navbar;
