import React from 'react';
import PokemonList from './components/PokemonList';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <PokemonSearch />
    

      </header>
      
      <PokemonList />
      
    </div>
  );
}

export default App;