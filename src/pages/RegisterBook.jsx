import { useState } from 'react';
import BookForm from '../components/BookForm/BookForm';
import { addBook, updateBook } from '../utils/bookData';

const RegisterBook = ({ history, location }) => {
  const bookToEdit = location.state?.book;

  const handleSubmit = (book) => {
    if (book.id) {
      updateBook(book);
    } else {
      addBook(book);
    }
    history.push('/books');
  };

  return (
    <div className="register-book">
      <h1>{bookToEdit ? 'Editar Livro' : 'Cadastrar Novo Livro'}</h1>
      <BookForm onSubmit={handleSubmit} initialData={bookToEdit || {}} />
    </div>
  );
};

export default RegisterBook;