import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button onClick={toggleSidebar} className="toggle-button">☰</button>
      <h2>Book Management</h2>
    </header>
  );
};

export default Header;
