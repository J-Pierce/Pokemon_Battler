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
  } else if (difficulty === "Easy") {
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

  return opponent;
}

function opponentFightChoice(difficulty, opponentBelt, playerChoice) {
  let viablePokemon = [];
  for (const pokeball in opponentBelt) {
    if (!opponentBelt[pokeball].pokemonInside.hasFainted()) {
      viablePokemon.push(opponentBelt[pokeball].pokemonInside);
    }
  }
  //console.log(viablePokemon);
  const opponentType = Object.groupBy(
    Object.values(viablePokemon),
    (pokemon) => pokemon.type
  );
  const effectiveType = { Fire: "Water", Water: "Grass", Grass: "Fire" };
  const weakType = { Fire: "Grass", Water: "Fire", Grass: "Water" };
  const playerType = makePokemon(playerChoice).type;
  const opponentTypeKeys = Object.keys(opponentType);
  let opponentChoice;
  if (difficulty === "Hard") {
    if (["Fire", "Water", "Grass"].includes(playerType)) {
      if (opponentTypeKeys.includes(effectiveType[playerType])) {
        opponentChoice = opponentType[effectiveType[playerType]].shift();
      } else if (opponentTypeKeys.includes(effectiveType["Normal"])) {
        opponentChoice = opponentType["Normal"].shift();
      } else if (opponentTypeKeys.includes(playerType)) {
        opponentChoice = opponentType[playerType].shift();
      } else if (opponentTypeKeys.includes(weakType[playerType])) {
        opponentChoice = opponentType[weakType[playerType]].shift();
      } else {
        console.log("No pokemon left to choose");
      }
    } else {
      const typeAmount = [];
      for (const type in opponentType) {
        const length = opponentType[type].length;
        typeAmount.push({ type, length });
      }
      typeAmount.sort((a, b) => b.length - a.length);

      if (opponentTypeKeys.includes("Normal")) {
        opponentChoice = opponentType["Normal"].shift();
      } else if (typeAmount.length > 0) {
        opponentChoice = opponentType[typeAmount[0].type].shift();
      } else {
        console.log("No pokemon left to choose");
      }
    }
  } else if (difficulty === "Easy") {
    if (["Fire", "Water", "Grass"].includes(playerType)) {
      if (opponentTypeKeys.includes(weakType[playerType])) {
        opponentChoice = opponentType[weakType[playerType]].shift();
      } else if (opponentTypeKeys.includes("Normal")) {
        opponentChoice = opponentType["Normal"].shift();
      } else if (opponentTypeKeys.includes(playerType)) {
        opponentChoice = opponentType[playerType].shift();
      } else if (opponentTypeKeys.includes(effectiveType[playerType])) {
        opponentChoice = opponentType[effectiveType[playerType]].shift();
      } else {
        console.log("No pokemon left to choose");
      }
    } else {
      const typeAmount = [];
      for (const type in opponentType) {
        const length = opponentType[type].length;
        typeAmount.push({ type, length });
      }
      typeAmount.sort((a, b) => b.length - a.length);

      if (opponentTypeKeys.includes("Normal")) {
        opponentChoice = opponentType["Normal"].shift();
      } else if (typeAmount.length > 0) {
        opponentChoice = opponentType[typeAmount[0].type].shift();
      } else {
        console.log("No pokemon left to choose");
      }
    }
  }
  return opponentChoice.name;
}

function opponentChooseMove(opponentPokemon) {
  const opponentMoves = {};
  for (const move in opponentPokemon.moves) {
    opponentMoves[move] = opponentPokemon.moves[move].powerPoints;
  }

  for (const move in opponentMoves) {
    if (opponentMoves[move] > 0) {
      return move;
    }
  }

}

// const difficulty = "Hard";
// const opponent = new Trainer(
//   makePokemon("Flareon"),
//   makePokemon("Vaporeon"),
//   makePokemon("Squirtle"),
//   makePokemon("Charmander"),
//   makePokemon("Squirtle"),
//   makePokemon("Bulbasaur"),
//   "testOpponent"
// );
// const playerChoice = "Rattata";
// opponentFightChoice(difficulty, opponent.belt, playerChoice);

module.exports = { opponentBelt, opponentFightChoice, opponentChooseMove };
