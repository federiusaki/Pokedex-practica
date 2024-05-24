import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  const searchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  return (
    <div>
      <h2 className='subtitulo'>Search Pokemon</h2>
      <TextField
          className='textfield'
          label="Pokemon or Id"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          
      type="text" 
      value={pokemonName} 
      onChange={handleInputChange} />
      <Button color="secondary" variant="contained" size="medium" onClick={searchPokemon}>Search</Button>
      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Type: {pokemonData.types[0].type.name}</p>
          <p> Height: {pokemonData.height}</p>
          <p> Weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;