import React, { useState } from 'react';

import axios from 'axios';

const AddBookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    publication_date: '',
    isbn: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/books',  bookData); // Connect with backend API
      alert('Book added successfully!');
    } catch (err) {
      console.error(err);
      alert('An error occurred while adding the book!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h3>Add New Book</h3>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" name="title" value={bookData.title} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>Author:</label>
        <input type="text" name="author" value={bookData.author} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>Genre:</label>
        <input type="text" name="genre" value={bookData.genre} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>Publication Date:</label>
        <input type="date" name="publication_date" value={bookData.publication_date} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>ISBN:</label>
        <input type="text" name="isbn" value={bookData.isbn} onChange={handleChange} required/>
      </div>
      <button type="submit" className="btn btn-primary">Add Book</button>
    </form>
  );
};

export default AddBookForm;
