import React, { useEffect, useState } from 'react';

import axios from 'axios';

const BookList = ( {filters} ) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:4000/books', { params: filters });
    
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [filters]);

  return (
    <div>
      <h3>Books List</h3>
      {loading ? (
        <p>Loading...</p>
      ) : books.length === 0 ? (
        <p>No books found!!</p>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Publication Date</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.isbn}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{new Date(book.publication_date).toISOString().split('T')[0]}</td>
                <td>{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};



export default BookList;
