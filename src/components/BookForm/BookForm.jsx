// import { useState } from "react";
// import './BookForm.css';

const BookForm = ({ onSubmit, initialData = {} }) => {
    const [book, setBook] = useStatr({
        title: initialData.title || '',
        author: initialData.author || '',
        genre: initialData.genre || '',
        readingDate: initialData.readingDate || '',
        id: initialData.id || null
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!book.title) newErrors.title = 'Título é obrigatório';
        if (!book.author) newErrors.author = 'Autor é obrigatório';
        if (!book.genre) newErrors.genre = 'Gênero é obrigatório';
        if (!book.readingDate) newErrors.readingDate = 'Data de leitura é obrigatória';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(book);
        }
    };

    return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label>Título*</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Autor(a)*</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className={errors.author ? 'error' : ''}
        />
        {errors.author && <span className="error-message">{errors.author}</span>}
      </div>

      <div className="form-group">
        <label>Gênero*</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className={errors.genre ? 'error' : ''}
        />
        {errors.genre && <span className="error-message">{errors.genre}</span>}
      </div>

      <div className="form-group">
        <label>Data de Leitura*</label>
        <input
          type="date"
          name="readingDate"
          value={book.readingDate}
          onChange={handleChange}
          className={errors.readingDate ? 'error' : ''}
        />
        {errors.readingDate && <span className="error-message">{errors.readingDate}</span>}
      </div>

      <button type="submit" className="submit-btn">
        {book.id ? 'Atualizar Livro' : 'Adicionar Livro'}
      </button>
    </form>
  );
};

export default BookForm;