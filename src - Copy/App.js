import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  
  const [books, setBooks] = useState([]);

  const editBookById = (id, updatedBook) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (newBook) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        ...newBook,
      },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList editBookById={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
