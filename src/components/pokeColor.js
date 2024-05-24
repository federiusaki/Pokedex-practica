import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonInfo = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [typeColors, setTypeColors] = useState({});

useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        setPokemonData(response.data);

        const typeColorsResponse = await axios.get('https://pokeapi.co/api/v2/type/');
        const colors = {};
        typeColorsResponse.data.results.forEach((type) => {
          colors[type.name] = type.color.name;
        });
        setTypeColors(colors);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div>
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          {pokemonData.types.map((type) => (
            <p key={type.type.name} style={{ color: typeColors[type.type.name] }}>
              Type: {type.type.name}
            </p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonInfo