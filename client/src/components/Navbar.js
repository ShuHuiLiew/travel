import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="w3-navbar w3-navbar-default w3-navbar-fixed-top">
          <div className="w3-container-fluid">
            <div className="w3-navbar-header">
              <a className="w3-navbar-brand" href="#">TRAVEL</a>
            </div>
            <ul className="w3-nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="form">Search</Link>
              </li>
              <li>
                <Link to="historical">History</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
