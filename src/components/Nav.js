import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a>
            <ul className="dropdown">
              <li><a href="#">Sub-1</a></li>
              <li><a href="#">Sub-2</a></li>
              <li><a href="#">Sub-3</a></li>
            </ul>
          </li>
          <li><a href="#">Three</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
