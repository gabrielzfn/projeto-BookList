const BOOKS_KEY = 'books';

const getBooks = () => {
  const books = localStorage.getItem(BOOKS_KEY);
  return books ? JSON.parse(books) : [];
};

const saveBooks = (books) => {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
};

export const addBook = (book) => {
  const books = getBooks();
  const newBook = { ...book, id: Date.now() };
  saveBooks([...books, newBook]);
};

export const updateBook = (book) => {
  const books = getBooks();
  const updatedBooks = books.map(b => b.id === book.id ? book : b);
  saveBooks(updatedBooks);
};

export const deleteBook = (id) => {
  const books = getBooks();
  saveBooks(books.filter(book => book.id !== id));
};

export const getBookById = (id) => {
  const books = getBooks();
  return books.find(book => book.id === id);
};