import './App.css';

import Home from './components/Home';
import About from './components/About';
import ProductList from './components/ProductList';

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <Router>
        <Nav />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<ProductList />} />
          <Route path="/secret" element={<h2>Welcome to the secret page!</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
