import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import RegisterBook from './pages/RegisterBook';
import BookListPage from './pages/BookListPage';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegisterBook />} />
          <Route path="/books" element={<BookListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;