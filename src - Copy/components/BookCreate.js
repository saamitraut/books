// BookCreate.js

import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [editor, setEditor] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'editor') {
      setEditor(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ title, price, editor });
    setTitle('');
    setPrice('');
    setEditor('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" name="title" value={title} onChange={handleChange} />
        <label>Price</label>
        <input className="input" type="number" name="price" value={price} onChange={handleChange} />
        <label>Editor</label>
        <input className="input" type="text" name="editor" value={editor} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
