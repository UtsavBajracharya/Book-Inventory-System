import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">Book Inventory System</h2>
      <nav className="sidebar-menu">
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link> 
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;