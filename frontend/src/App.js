import React, { useState } from 'react';

import AddBookForm from './components/AddBookForm.js';

import FilterBooks from './components/FilterBooks.js';

import BooksList from './components/BookList.js';

import ExportButton from './components/ExportButton.js';

import './styles.css';

function App() {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterData) => {
    setFilters(filterData);

  };

  return (
    <div className="App">
      <h1>Book Inventory Management System</h1>
      <AddBookForm />
      <FilterBooks onFilter={handleFilterChange} />
      <BooksList filters={filters} />
      <div>
        <ExportButton format="csv" />
        <ExportButton format="json" />
      </div>
    </div>
  );
}

export default App;
