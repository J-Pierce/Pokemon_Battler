const inquirer = require("inquirer");
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
const { makePokemon } = require("./pokemonCreator");

const userBelt = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "Ash",
  },
  {
    name: "startingPokemon",
    type: "checkbox",
    message: "Choose 6 pokemon to equip to your belt:",
    loop: false,
    choices: Object.keys(makePokemon()),
  },
];

const opponentBelt = [
  {
    name: "startingPokemon",
    type: "checkbox",
    message: "Choose 6 pokemon to equip to your opponents belt:",
    loop: false,
    choices: Object.keys(makePokemon()),
  },
];

const userStartingPokemon = [
  {
    type: "list",
    name: "chosenPokemon",
    message: "Which pokemon would you like to send out to battle first?",
    choices: [],
  },
];

const opponentStartingPokemon = [
  {
    type: "list",
    name: "opponentPokemon",
    message: "Which pokemon should your opponent send out first to battle?",
    loop: false,
    choices: [],
  },
];

function chooseStartingPokemon(question) {
  return inquirer.prompt(question).then((data) => {
    if (data.startingPokemon.length < 6) {
      console.log("That wasn't enough pokemon, you need to choose 6!");
      return chooseStartingPokemon(question);
    } else if (data.startingPokemon.length > 6) {
      console.log("That was too many pokemon, you need to choose 6!");
      return chooseStartingPokemon(question);
    } else {
      return data;
    }
  });
}

chooseStartingPokemon(userBelt)
  .then((userChoice) => {
    return Promise.all([userChoice, chooseStartingPokemon(opponentBelt)]);
  })
  .then((data) => {
    const userPokemon = data[0].startingPokemon;
    const opponentPokemon = data[1].startingPokemon;

    userStartingPokemon[0].choices = data[0].startingPokemon;
    opponentStartingPokemon[0].choices = data[1].startingPokemon;

    const trainer = new Trainer(
      makePokemon(userPokemon[0]),
      makePokemon(userPokemon[1]),
      makePokemon(userPokemon[2]),
      makePokemon(userPokemon[3]),
      makePokemon(userPokemon[4]),
      makePokemon(userPokemon[5]),
      data[0].name
    );

    const opponent = new Trainer(
      makePokemon(opponentPokemon[0]),
      makePokemon(opponentPokemon[1]),
      makePokemon(opponentPokemon[2]),
      makePokemon(opponentPokemon[3]),
      makePokemon(opponentPokemon[4]),
      makePokemon(opponentPokemon[5]),
      "Opponent"
    );

    return { trainer, opponent };
  })
  .then((players) => {
    return Promise.all([players, inquirer.prompt(userStartingPokemon)]);
  })
  .then((trainerData) => {
    return Promise.all([
      ...trainerData,
      inquirer.prompt(opponentStartingPokemon),
    ]);
  })
  .then((battleData) => {
    const trainer = battleData[0]["trainer"];
    const opponent = battleData[0]["opponent"];
    const chosenPokemon = battleData[1]["chosenPokemon"];
    const opponentPokemon = battleData[2]["opponentPokemon"];

    const battle = new Battle(
      trainer,
      chosenPokemon,
      opponent,
      opponentPokemon
    );

    battle.fight();
  });
