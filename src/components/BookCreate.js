import { useState } from 'react';

function BookCreate({ onCreate,toggleModal }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [editor, setEditor] = useState('');

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
  const newBook = {
    id: Math.round(Math.random() * 9999),
    title, price, editor
  };
    onCreate(newBook);
    toggleModal();
  };

  return (
    <div className="book-create1">
      <h3>Add a BookCreate</h3>
      <form onSubmit={handleSubmit}>
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

        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate