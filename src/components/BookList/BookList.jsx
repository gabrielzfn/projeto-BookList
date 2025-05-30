import './BookList.css';

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Nenhum livro cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor(a)</th>
              <th>Gênero</th>
              <th>Data de Leitura</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                {/* Verifica se readingDate existe antes de formatar */}
                <td>
                  {book.readingDate
                    ? new Date(book.readingDate).toLocaleDateString('pt-BR')
                    : ''}
                </td>
                <td>
                  <button onClick={() => onEdit(book)} className="edit-btn">Editar</button>
                  <button onClick={() => onDelete(book.id)} className="delete-btn">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;