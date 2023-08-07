import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-players">All Players</Link>
          </li>
          <li>
            <Link to="/new-player">New Player</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default App;
