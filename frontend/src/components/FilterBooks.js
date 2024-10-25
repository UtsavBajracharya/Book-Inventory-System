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
    console.log('Filtering with data:', formattedData); // Test the output here
    onFilter(formattedData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Filter Books</h3>
      
      <label>Title:</label>
      <input type="text" name="title" value={filterData.title} onChange={handleChange} />
      
      <label>Author:</label>
      <input type="text" name="author" value={filterData.author} onChange={handleChange} />
      
      <label>Genre:</label>
      <input type="text" name="genre" value={filterData.genre} onChange={handleChange} />
      
      <label>Publication Date:</label>
      <input type="date" name="publication_date" value={filterData.publication_date} onChange={handleChange} />
      
      <button type="submit">Filter Books</button>
    </form>
  );
};

export default FilterBooks;
