// Links para todas as páginas usando o react-router-dom
// Importando o react-router-dom para criar links de navegação

import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/cadastrar">Cadastrar Livros</Link></li>
                <li><Link to="/livros">Livros</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;