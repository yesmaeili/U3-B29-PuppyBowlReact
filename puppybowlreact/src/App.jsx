import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import NavBar from './components/NavBar';

function App () {
return (
  <BrowserRouter>
  <NavBar/>
  </BrowserRouter>
);
}

export default App;