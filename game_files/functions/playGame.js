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

const question1 = [
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

const question2 = [
  {
    type: "list",
    name: "chosenPokemon",
    message: "Which pokemon would you like to send out to battle first?",
    choices: [],
  },
];

const question3 = [
  {
    type: "list",
    name: "opponentPokemon",
    message: "Which pokemon would you like your pokemon to battle?",
    loop: false,
    choices: Object.keys(makePokemon()),
  },
];

function chooseStartingPokemon() {
  return inquirer.prompt(question1).then((data) => {
    if (data.startingPokemon.length < 6) {
      console.log("That wasn't enough pokemon, you need to choose 6!");
      return chooseStartingPokemon();
    } else if (data.startingPokemon.length > 6) {
      console.log("That was too many pokemon, you need to choose 6!");
      return chooseStartingPokemon();
    } else {
      return data;
    }
  });
}

chooseStartingPokemon()
  .then((data) => {
    question2[0].choices = data.startingPokemon;
    const pokemon = data.startingPokemon;
    const trainer = new Trainer(
      makePokemon(pokemon[0]),
      makePokemon(pokemon[1]),
      makePokemon(pokemon[2]),
      makePokemon(pokemon[3]),
      makePokemon(pokemon[4]),
      makePokemon(pokemon[5]),
      data.name
    );
    return trainer;
  })
  .then((trainer) => {
    return Promise.all([{ trainer }, inquirer.prompt(question2)]);
  })
  .then((trainerData) => {
    return Promise.all([...trainerData, inquirer.prompt(question3)]);
  })
  .then((battleData) => {
    const trainer = battleData[0]["trainer"];
    const chosenPokemon = battleData[1]["chosenPokemon"];
    const opponentPokemon = battleData[2]["opponentPokemon"];
    const opponentTrainer = new Trainer(makePokemon(opponentPokemon));

    const battle = new Battle(
      trainer,
      chosenPokemon,
      opponentTrainer,
      opponentPokemon
    );

    battle.fight();
  });
