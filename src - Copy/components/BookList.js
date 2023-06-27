import BookShow from './BookShow';

function BookList({ books, onDelete, editBookById }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow editBookById={editBookById} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
