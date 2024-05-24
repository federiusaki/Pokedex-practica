import React, { useState, useEffect } from 'react';
import axios from 'axios';



const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(pokemon.url);
      setPokemonDetails(response.data);
    };
    
    fetchData();
  }, [pokemon.url]);
  


  return (
    <div >
      <h3>{pokemon.name}</h3>
      {pokemonDetails && (
        <div>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <p>Type: {pokemonDetails.types[0].type.name}</p>
          <p className='altura'> Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>

        </div>
      )}
    </div>
  );
};

export default PokemonCard;