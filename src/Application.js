import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function Application() {  
  const [books, setbooks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const editbookById = (id, updatedbook) => {
    const updatedbooks = books.map((book) => {
      if (book.id === id) {
        return updatedbook;
      }
      return book;
    });
    setbooks(updatedbooks);
  };

  const deletebookById = (id) => {
    const updatedbooks = books.filter((book) => book.id !== id);
    setbooks(updatedbooks);
  };

  const createbook = (newbook) => {
    const updatedbooks = [...books, newbook];
    setbooks(updatedbooks);
  };

  return (
    <div className="App">
      
      <BookList books={books} onDelete={deletebookById} onEdit={editbookById} />
      
      <button className="add-book-button" onClick={toggleModal}>Add book</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <BookCreate onCreate={createbook} toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
}


export default Application;