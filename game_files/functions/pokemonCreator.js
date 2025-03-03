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

/*
Moves:
  move1 : 
    damage : 1, type : pokemon type, powerPoints : 5
  move2 : 
    damage : 1.5, type : pokemon type, powerPoints : 2
  move3 : 
    damage : 0.5, type : pokemon type, powerPoints : 7
  move4 : 
    damage : 1.1, type : pokemon type, powerPoints : 5

*/
const healthScaling = 2;
const damageScaling = 1;
const critChance = 0.05;
const critModifier = 3;
function makePokemon(pokemonName = "Empty") {
  const pokemonList = {
    Eevee: new Normal(
      "Eevee",
      55 * healthScaling,
      18 * damageScaling,
      {
        "Quick Attack": { damageModifier: 0.5, type: "normal", powerPoints: 7 },
        Headbutt: { damageModifier: 1, type: "normal", powerPoints: 5 },
        "Take Down": { damageModifier: 1.5, type: "normal", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      1.2,
      critChance,
      critModifier
    ),
    Flareon: new Fire(
      "Flareon",
      65 * healthScaling,
      20 * damageScaling,
      {
        Ember: { damageModifier: 0.5, type: "Fire", powerPoints: 7 },
        "Fire blast": { damageModifier: 1, type: "Fire", powerPoints: 5 },
        "Flare Blitz": { damageModifier: 1.5, type: "Fire", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      0.9,
      critChance,
      critModifier
    ),
    Vaporeon: new Water(
      "Vaporeon",
      70 * healthScaling,
      19 * damageScaling,
      {
        "Water Gun": { damageModifier: 0.5, type: "Water", powerPoints: 7 },
        "Muddy Water": { damageModifier: 1, type: "Water", powerPoints: 5 },
        "Hydro pump": { damageModifier: 1.5, type: "Water", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      1,
      critChance,
      critModifier
    ),
    Leafeon: new Grass(
      "Leafeon",
      65 * healthScaling,
      17 * damageScaling,
      {
        "Leech Seed": { damageModifier: 0.5, type: "Grass", powerPoints: 7 },
        "Giga drain": { damageModifier: 1, type: "Grass", powerPoints: 5 },
        "Leaf Blade": { damageModifier: 1.5, type: "Grass", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      0.8,
      critChance,
      critModifier
    ),
    Charmander: new Fire(
      "Charmander",
      44 * healthScaling,
      17 * damageScaling,
      {
        Ember: { damageModifier: 0.5, type: "Fire", powerPoints: 7 },
        Flamethrower: { damageModifier: 1, type: "Fire", powerPoints: 5 },
        Inferno: { damageModifier: 1.5, type: "Fire", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      1.1,
      critChance,
      critModifier
    ),
    Squirtle: new Water(
      "Squirtle",
      44 * healthScaling,
      16 * damageScaling,
      {
        "Rain Dance": { damageModifier: 0.5, type: "Water", powerPoints: 7 },
        Surf: { damageModifier: 1, type: "Water", powerPoints: 5 },
        "Wave Crash": { damageModifier: 1.5, type: "Water", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      0.7,
      critChance,
      critModifier
    ),
    Bulbasaur: new Grass(
      "Bulbasaur",
      45 * healthScaling,
      16 * damageScaling,
      {
        "Seed Bomb": { damageModifier: 0.5, type: "Grass", powerPoints: 7 },
        "Razor leaf": { damageModifier: 1, type: "Grass", powerPoints: 5 },
        "Power Whip": { damageModifier: 1.5, type: "Grass", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
      },
      1.3,
      critChance,
      critModifier
    ),
    Rattata: new Normal(
      "Rattata",
      30 * healthScaling,
      56 * damageScaling,
      {
        "Quick Attack": { damageModifier: 0.5, type: "normal", powerPoints: 7 },
        "Take Down": { damageModifier: 1, type: "normal", powerPoints: 5 },
        "Super Fang": { damageModifier: 1.5, type: "normal", powerPoints: 2 },
        Tackle: { damageModifier: 1.1, type: "normal", powerPoints: 4 },
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

function pokemonStruggle(pokemon) {
  pokemon.moves = {
    Struggle: { damageModifier: 1, type: "normal", powerPoints: 1 },
  };
  return pokemon;
}

module.exports = { makePokemon, pokemonByType, pokemonStruggle };
