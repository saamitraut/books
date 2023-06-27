import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);
  const [editor, setEditor] = useState(book.editor);

  const handleChange = (event) => {
    const { name, value } = event.target;
        if (name === 'title') {
      setTitle(value);
    }
    if (name === 'price') {
      setPrice(value);
    }
    if (name === 'editor') {
      setEditor(value);
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = { ...book, title,price,editor };
    onSubmit(book.id, updatedBook);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <label>Price</label>
      <input
        className="input"
        type="text"
        name="price"
        value={price}
        onChange={handleChange}
      />
      <label>Editor</label>
      <input
        className="input"
        type="text"
        name="editor"
        value={editor}
        onChange={handleChange}
      />

      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;