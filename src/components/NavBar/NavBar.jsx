import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/register">Cadastrar Livro</Link></li>
        <li><Link to="/books">Lista de Livros</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;