import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-items">
      <a
        className="nav-left-btn"
        href="https://www.linkedin.com/in/matthewszeto/"
      >
        linkedin <b>connect</b>
      </a>
      <code className="navbar-logo first-name">
        matthew<span className="last-name">szeto</span>
        <br />
        <span className="navbar-logo-software">
          (software<span className="navbar-logo-engineer">engineer)</span>
        </span>
      </code>

      <a className="nav-right-btn" href="https://github.com/mattszeto">
        github <b>follow</b>
      </a>
    </nav>
  );
};

export default Navbar;
