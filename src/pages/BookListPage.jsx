import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookList from '../components/BookList/BookList'
import { getBooks, deleteBook } from '../utils/bookData'
import './BookListPage.css'

const BookListPage = () => {
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setBooks(getBooks())
  }, [])

  const handleDelete = (id) => {
    deleteBook(id)
    setBooks(getBooks())
  }

  const handleEdit = (book) => {
    navigate('/register', { state: { book } })
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
      <BookList 
        books={filteredBooks} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </div>
  )
}

export default BookListPage