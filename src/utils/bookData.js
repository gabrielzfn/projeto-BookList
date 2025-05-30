const BOOKS_KEY = 'book-manager-books'

export const getBooks = () => {
  const books = localStorage.getItem(BOOKS_KEY)
  return books ? JSON.parse(books) : []
}

export const saveBooks = (books) => {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books))
}

export const addBook = (book) => {
  const books = getBooks()
  const newBook = { ...book, id: Date.now() }
  saveBooks([...books, newBook])
}

export const updateBook = (book) => {
  const books = getBooks()
  saveBooks(books.map(b => b.id === book.id ? book : b))
}

export const deleteBook = (id) => {
  const books = getBooks()
  saveBooks(books.filter(book => book.id !== id))
}