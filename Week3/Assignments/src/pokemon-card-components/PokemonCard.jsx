import React, { useState } from "react";

const pokemonData = [
  {
    id: 1,
    name: "Bulbasaur",
    base_experience: 64,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 4,
    name: "Charmander",
    base_experience: 62,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 7,
    name: "Squirtle",
    base_experience: 63,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 25,
    name: "Pikachu",
    base_experience: 112,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 133,
    name: "Eevee",
    base_experience: 65,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
];

const PokemonCard = () => {
  const [availablePoints, setAvailablePoints] = useState(500);
  const [deck, setDeck] = useState([]);

  const addPokemonToDeck = (pokemon) => {
    if (availablePoints >= pokemon.base_experience) {
      const existingPokemon = deck.find((p) => p.id === pokemon.id);
      if (existingPokemon) {
        existingPokemon.count += 1;
      }
      else {
        setDeck([...deck, { ...pokemon, count: 1 }]);
      }
      setAvailablePoints(availablePoints - pokemon.base_experience);
    }
    else {
      alert("Yetersiz puan!");
    }
  };

  const removePokemonFromDeck = (pokemon) => {
    const updatedDeck = deck.map((p) => {
      if (p.id === pokemon.id) {
        if (p.count === 1) {
          return null;
        } else {
          return { ...p, count: p.count - 1 };
        }
      }
      return p;
    }).filter(Boolean);
    setDeck(updatedDeck);
    setAvailablePoints(availablePoints + pokemon.base_experience);
  };

  return (
    <div>
      <h1>Pokemon Deck Oluşturucu</h1>
      <div>
        <h2>Kalan Puan: {availablePoints}</h2>
      </div>
      <div>
        <h3>Deck</h3>
        <ul>
          {deck.map((pokemon) => (
            <li key={pokemon.id}>
              <img src={pokemon.sprite} alt={pokemon.name} />
              <p>
                {pokemon.name} ({pokemon.base_experience} puan) {pokemon.count > 1 ? `x${pokemon.count}` : ""}
                <button onClick={() => removePokemonFromDeck(pokemon)}>Çıkar</button>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Pokemon Listesi</h3>
        <ul>
          {deck.length < 5 &&
            pokemonData.map((pokemon) => (
              <li key={pokemon.id}>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <p>
                  {pokemon.name} ({pokemon.base_experience} puan)
                  <button onClick={() => addPokemonToDeck(pokemon)}>Ekle</button>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
