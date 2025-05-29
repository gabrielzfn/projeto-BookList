import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import RegisterBook from './components/RegisterBook/RegisterBook';
import BookListPage from './components/BookListPage/BookListPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/register-book" component={RegisterBook} />
            <Route path="/book-list" component={BookListPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;