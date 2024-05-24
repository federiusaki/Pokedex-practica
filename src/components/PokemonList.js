import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import Grid from '@mui/material/Grid';



const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      setPokemonList(response.data.results);
    };

    fetchData();
  }, []);


  return (
    <div>
      <h2>Pokédex</h2>
      <div className='listapokemones tarjeta' >
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;