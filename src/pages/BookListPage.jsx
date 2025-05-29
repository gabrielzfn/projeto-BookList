import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BookList from '../components/BookList/BookList';
import { getBooks, deleteBook } from '../utils/bookData';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  const handleDelete = (id) => {
    deleteBook(id);
    setBooks(getBooks());
  };

  const handleEdit = (book) => {
    history.push('/register', { book });
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list-page">
      <h1>Lista de Livros</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por título, autor ou gênero..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <BookList books={filteredBooks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default BookListPage;