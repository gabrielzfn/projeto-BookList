import { useNavigate, useLocation } from 'react-router-dom';
import BookForm from '../components/BookForm/BookForm';
import { addBook, updateBook } from '../utils/bookData';
import './RegisterBook.css';

const RegisterBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookToEdit = location.state?.book;

  const handleSubmit = (book) => {
    if (book.id) {
      updateBook(book);
    } else {
      addBook(book);
    }
    navigate('/books');
  };

  return (
    <div className="register-book-page">
      <h1>{bookToEdit ? 'Editar Livro' : 'Cadastrar Novo Livro'}</h1>
      <BookForm onSubmit={handleSubmit} initialData={bookToEdit || {}} />
    </div>
  );
};

export default RegisterBook;