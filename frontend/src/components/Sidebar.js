import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="close-button">✖</button> 
      <h2 className="sidebar-logo">Book Inventory System</h2>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <Link to="/" className="sidebar-button">Dashboard</Link>
          </li>
          <li>
            <Link to="/add-book" className="sidebar-button">Add Book</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
