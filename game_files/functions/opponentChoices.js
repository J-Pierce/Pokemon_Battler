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
const { makePokemon, pokemonByType } = require("./pokemonCreator");

function opponentBelt(difficulty, player) {
  const effectiveType = { Fire: "Water", Water: "Grass", Grass: "Fire" };
  const weakType = { Fire: "Grass", Water: "Fire", Grass: "Water" };

  const pokemonTypeList = pokemonByType();
  const opponentPokemon = [];
  const normalPokemonList = pokemonTypeList["Normal"];

  if (difficulty === "Hard") {
    for (let i = 1; i < 7; i++) {
      const type = player.belt[i].pokemonInside.type;

      if (["Fire", "Water", "Grass"].includes(type)) {
        const effectivePokemonList = pokemonTypeList[effectiveType[type]];
        if (effectivePokemonList.length > 0) {
          opponentPokemon[i] = effectivePokemonList.shift();
        } else {
          opponentPokemon[i] = normalPokemonList.shift();
        }
      } else {
        opponentPokemon[i] = normalPokemonList.shift();
      }
    }
  }

  if (difficulty === "Easy") {
    for (let i = 1; i < 7; i++) {
      const type = player.belt[i].pokemonInside.type;

      if (["Fire", "Water", "Grass"].includes(type)) {
        const weakPokemonList = pokemonTypeList[weakType[type]];
        if (weakPokemonList.length > 0) {
          opponentPokemon[i] = weakPokemonList.shift();
        } else {
          opponentPokemon[i] = normalPokemonList.shift();
        }
      } else {
        opponentPokemon[i] = normalPokemonList.shift();
      }
    }
  }

  const opponent = new Trainer(
    opponentPokemon[1],
    opponentPokemon[2],
    opponentPokemon[3],
    opponentPokemon[4],
    opponentPokemon[5],
    opponentPokemon[6],
    "Opponent"
  );

  for (const pokeballPlayer in player.belt) {
    for (const pokeballOpponent in opponent.belt) {
      console.log(player.belt[pokeballPlayer].pokemonInside.name);
      console.log(player.belt[pokeballOpponent].pokemonInside.name);
      console.log(
        "Are they the same?: ",
        player.belt[pokeballPlayer].pokemonInside ===
          player.belt[pokeballOpponent].pokemonInside
      );
    }
  }

  return opponent;
}

module.exports = opponentBelt;
