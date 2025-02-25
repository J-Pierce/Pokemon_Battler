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
      {
        Headbutt: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      1.2,
      critChance,
      critModifier
    ),
    Flareon: new Fire(
      "Flareon",
      65,
      20,
      {
        "Fire blast": {
          damageModifier: 1,
          type: "normal",
          powerPoints: 5,
        },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      0.9,
      critChance,
      critModifier
    ),
    Vaporeon: new Water(
      "Vaporeon",
      70,
      19,
      {
        "Hydro pump": {
          damageModifier: 1,
          type: "normal",
          powerPoints: 5,
        },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      1,
      critChance,
      critModifier
    ),
    Leafeon: new Grass(
      "Leafeon",
      65,
      17,
      {
        "Giga drain": {
          damageModifier: 1,
          type: "normal",
          powerPoints: 5,
        },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      0.8,
      critChance,
      critModifier
    ),
    Charmander: new Fire(
      "Charmander",
      44,
      17,
      {
        Flamethrower: {
          damageModifier: 1,
          type: "normal",
          powerPoints: 5,
        },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      1.1,
      critChance,
      critModifier
    ),
    Squirtle: new Water(
      "Squirtle",
      44,
      16,
      {
        Surf: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      0.7,
      critChance,
      critModifier
    ),
    Bulbasaur: new Grass(
      "Bulbasaur",
      45,
      16,
      {
        "Razor leaf": {
          damageModifier: 1,
          type: "normal",
          powerPoints: 5,
        },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
      1.3,
      critChance,
      critModifier
    ),
    Rattata: new Normal(
      "Rattata",
      30,
      56,
      {
        Tackle: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move2: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move3: { damageModifier: 1, type: "normal", powerPoints: 5 },
        move4: { damageModifier: 1, type: "normal", powerPoints: 5 },
      },
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
