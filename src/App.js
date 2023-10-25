import React, { useState, useEffect } from 'react';

import Searcher from './components/Searcher';
import Pokemon from './components/Pokemon';

import { getPokemonByName } from './services/pokemon.service.js';

import { usePOKEUserIdioma } from './hooks/usePOKEUserIdioma';

import './style.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState(undefined);

  const getPokemon = (pokemonName) => {
    setLoading(true);
    getPokemonByName(pokemonName).then((pokemon) => {
      setPokemon(pokemon);
      setLoading(false);
    });
  };

  useEffect(() => getPokemon('charmander'), []);

  const findPokemon = () => inputValue.length > 0 && getPokemon(inputValue);

  return (
    <div>
      <Pokemon loading={loading} pokemon={pokemon} />
      <Searcher inputValue={inputValue} setInputValue={setInputValue} />
      <div>
        <button onClick={findPokemon}>Encontrar pokemon</button>
      </div>
    </div>
  );
};

export default App;
