import React from 'react';
import './Header.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul>
          <li className="Nav"><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
