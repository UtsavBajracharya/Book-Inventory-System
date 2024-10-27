import React, { useState } from 'react';

const FilterBooks = ( {onFilter} ) => {
  const [filterData, setFilterData] = useState({
    title: '',
    author: '',
    genre: '',
    publication_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  // Format publication date to YYYY-MM-DD format 
  const formattedData = {
    ...filterData,
    publication_date: filterData.publication_date 
      ? new Date(filterData.publication_date).toISOString().split('T')[0]
      : ''
  };

    // pass filter formatted data to parent component 
    onFilter(formattedData);

  };

  return (
    
  <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className="filter-form">
      <input type="text" name="title" placeholder="Title" value={filterData.title} onChange={handleChange} style={{ marginRight: '12px', marginBottom: '12px', flexGrow: 1 }}/>

      <input type="text" name="author" placeholder="Author" value={filterData.author} onChange={handleChange} style={{ marginRight: '12px', marginBottom: '12px', flexGrow: 1 }}/>

      <input type="text" name="genre" placeholder="Genre" value={filterData.genre} onChange={handleChange} style={{ marginRight: '12px', marginBottom: '12px', flexGrow: 1 }}/>

      <input type="date" name="publication_date" value={filterData.publication_date} onChange={handleChange} style={{ marginRight: '12px', marginBottom: '12px' }}/>

      <button type="submit">Filter Books</button>
    </form>
  );
};

export default FilterBooks;
