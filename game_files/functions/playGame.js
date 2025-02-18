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

/*
 next steps I want to add:
  - choose next pokemon out of ones left (not fainted) to go into battle
  - carry on choosing and battling until all 6 pokemon in a players belt have fainted
  - player with pokemon left wins 

  - opponent chooses belt pokemon and pokemon to battle automatically (no user input)
  - can set opponents difficulty to effect how strategically effective its choices are

Recommended next steps:
- critical hit system randomly awards pokemon triple damage
- ability to swap pokemon mid battle, uses up attack for that round
- pokemon have multiple moves user can select each round
    - move modifies attack damage
    - moves have a finite amount of uses determined by its PP (power points)
    - once PP runs out move cant be used
    - when all moves have run out pokemon 'struggles' damaging itself with its base attack damage
*/
