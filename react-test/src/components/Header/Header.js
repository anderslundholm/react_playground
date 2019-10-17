import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul>
          <li className="Nav"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Other</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
