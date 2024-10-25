import React, { useState } from 'react';

const FilterBooks = ( {onFilter} ) => {
  const [filterData, setFilterData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.get('http://localhost:4000/books', {
    //     params: filter
    //   });
    //   setFilteredData(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    onFilter(filterData);
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
      <input type="date" name="publicationDate" value={filterData.publicationDate} onChange={handleChange} />
      
      <button type="submit">Filter Books</button>
    </form>
  );
};

export default FilterBooks;
