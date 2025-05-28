import { useState } from 'react';
import './BookForm.css';

const BookForm = ({ onSubmit, initialData = {} }) => {
  // Estado para armazenar os dados do livro preenchidos no formulário
  const [book, setBook] = useState({
    title: initialData.title || '',
    author: initialData.author || '',
    genre: initialData.genre || '',
    readingDate: initialData.readingDate || '',
    id: initialData.id || null
  });

  // Estado para armazenar mensagens de erro de validação dos campos
  const [errors, setErrors] = useState({});

  // Função para validar os campos do formulário
  const validate = () => {
    const newErrors = {};
    if (!book.title.trim()) newErrors.title = 'Título é obrigatório'; // Valida título
    if (!book.author.trim()) newErrors.author = 'Autor(a) é obrigatório'; // Valida autor
    if (!book.genre.trim()) newErrors.genre = 'Gênero é obrigatório'; // Valida gênero
    if (!book.readingDate) newErrors.readingDate = 'Data de leitura é obrigatória'; // Valida data
    
    setErrors(newErrors); // Atualiza estado de erros
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  // Função chamada ao alterar qualquer campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value })); // Atualiza o campo correspondente no estado book
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne recarregamento da página
    if (validate()) {   // Se passar na validação
      onSubmit(book);   // Chama função onSubmit passando os dados do livro
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label>Título*</label>
        {/* Input para o título do livro */}
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {/* Exibe mensagem de erro se houver erro no título */}
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Autor(a)*</label>
        {/* Input para o autor do livro */}
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className={errors.author ? 'error' : ''}
        />
        {/* Exibe mensagem de erro se houver erro no autor */}
        {errors.author && <span className="error-message">{errors.author}</span>}
      </div>

      <div className="form-group">
        <label>Gênero*</label>
        {/* Input para o gênero do livro */}
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className={errors.genre ? 'error' : ''}
        />
        {/* Exibe mensagem de erro se houver erro no gênero */}
        {errors.genre && <span className="error-message">{errors.genre}</span>}
      </div>

      <div className="form-group">
        <label>Data de Leitura*</label>
        {/* Input para a data de leitura do livro */}
        <input
          type="date"
          name="readingDate"
          value={book.readingDate}
          onChange={handleChange}
          className={errors.readingDate ? 'error' : ''}
        />
        {/* Exibe mensagem de erro se houver erro na data de leitura */}
        {errors.readingDate && <span className="error-message">{errors.readingDate}</span>}
      </div>

      {/* Botão de envio: muda texto se for edição ou adição */}
      <button type="submit" className="submit-btn">
        {book.id ? 'Atualizar Livro' : 'Adicionar Livro'}
      </button>
    </form>
  );
};

export default BookForm;