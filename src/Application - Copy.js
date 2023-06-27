import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function Application() {  
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const editBookById = (id, updatedBook) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return updatedBook;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      
      <button class="add-book-button" onClick={toggleModal}>Add Book</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <BookCreate onCreate={createBook} toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Application;
