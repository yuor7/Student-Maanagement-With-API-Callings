import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Team Manager</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/members" className="nav-link">Members</Link></li>
            <li><Link to="/add-member" className="nav-link btn-add">+ Add Member</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
