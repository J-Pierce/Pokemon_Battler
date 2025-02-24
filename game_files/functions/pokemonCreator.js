const {
  Pokemon,
  Normal,
  Fire,
  Water,
  Grass,
  Pokeball,
  Trainer,
  Battle,
} = require("../classes/indexClasses");

const critChance = 0.2;
const critModifier = 3;

function makePokemon(pokemonName = "Empty") {
  const pokemonList = {
    Eevee: new Normal("Eevee", 55, 18, "Headbutt", critChance, critModifier),
    Flareon: new Fire(
      "Flareon",
      65,
      20,
      "Fire blast",
      critChance,
      critModifier
    ),
    Vaporeon: new Water(
      "Vaporeon",
      70,
      19,
      "Hydro pump",
      critChance,
      critModifier
    ),
    Leafeon: new Grass(
      "Leafeon",
      65,
      17,
      "Giga drain",
      critChance,
      critModifier
    ),
    Charmander: new Fire(
      "Charmander",
      44,
      17,
      "Flamethrower",
      critChance,
      critModifier
    ),
    Squirtle: new Water("Squirtle", 44, 16, "Surf", critChance, critModifier),
    Bulbasaur: new Grass(
      "Bulbasaur",
      45,
      16,
      "Razor leaf",
      critChance,
      critModifier
    ),
    Rattata: new Normal("Rattata", 30, 56, "Tackle", critChance, critModifier),
  };

  if (pokemonName === "Empty") {
    return pokemonList;
  } else {
    return pokemonList[pokemonName];
  }
}

function pokemonByType() {
  return Object.groupBy(
    Object.values(makePokemon()),
    (pokemon) => pokemon.type
  );
}

module.exports = { makePokemon, pokemonByType };
