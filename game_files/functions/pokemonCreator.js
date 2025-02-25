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

const critChance = 0.05;
const critModifier = 3;

function makePokemon(pokemonName = "Empty") {
  const pokemonList = {
    Eevee: new Normal(
      "Eevee",
      55,
      18,
      "Headbutt",
      1.2,
      critChance,
      critModifier
    ),
    Flareon: new Fire(
      "Flareon",
      65,
      20,
      "Fire blast",
      0.9,
      critChance,
      critModifier
    ),
    Vaporeon: new Water(
      "Vaporeon",
      70,
      19,
      "Hydro pump",
      1,
      critChance,
      critModifier
    ),
    Leafeon: new Grass(
      "Leafeon",
      65,
      17,
      "Giga drain",
      0.8,
      critChance,
      critModifier
    ),
    Charmander: new Fire(
      "Charmander",
      44,
      17,
      "Flamethrower",
      1.1,
      critChance,
      critModifier
    ),
    Squirtle: new Water(
      "Squirtle",
      44,
      16,
      "Surf",
      0.7,
      critChance,
      critModifier
    ),
    Bulbasaur: new Grass(
      "Bulbasaur",
      45,
      16,
      "Razor leaf",
      1.3,
      critChance,
      critModifier
    ),
    Rattata: new Normal(
      "Rattata",
      30,
      56,
      "Tackle",
      0.5,
      critChance,
      critModifier
    ),
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
