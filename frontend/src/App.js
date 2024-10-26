import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddBookForm from './components/AddBookForm.js';

import FilterBooks from './components/FilterBooks.js';

import BooksList from './components/BookList.js';

import ExportButton from './components/ExportButton.js';

import Sidebar from './components/Sidebar'; 

import Header from './components/Header'; 

import './styles.css';

function App() {
  const [filters, setFilters] = useState({});

  const handleFilter = (filterData) => {
    setFilters(filterData);

  };

  return (
    
    <Router>
      <div className="dashboard">
        <Sidebar /> 
        <div className="main-content">
          <Header /> 
          <div className="container py-4">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1 className="text-left mb-4">Dashboard</h1>
                   
                    <div className="row mb-4">
                      <div className="col-12">
                        <FilterBooks onFilter={handleFilter} />
                      </div>
                    </div>
               
                    <div className="row mb-4">
                      <div className="col-12">
                        <BooksList filters={filters} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 d-flex justify-content-start export-buttons-container">
                        <ExportButton format="csv" />
                        <ExportButton format="json" />
                      </div>
                    </div>
                  </>
                }
              />
              <Route path="/add-book" element={<AddBookForm />} /> {/* Route to AddBookForm */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
