// BookShow.js

import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, editBookById }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  // 

  const handleSubmit = (id,updatedBook) => {
    setShowEdit(false);
    editBookById(id,updatedBook);
  };

  let content = (
    <div>
      <h3>{book.title}</h3>
      <p>Price: ${book.price}</p>
      <p>Editor: {book.editor}</p>
    </div>
  );

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
