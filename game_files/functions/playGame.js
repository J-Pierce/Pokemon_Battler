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
const { makePokemon, pokemonByType } = require("./pokemonCreator");
const opponentChoices = require("./opponentChoices");

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

const userStartingPokemon = [
  {
    type: "list",
    name: "chosenPokemon",
    message: "Which pokemon would you like to send out to battle first?",
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
  .then((data) => {
    const userPokemon = data.startingPokemon;
    userStartingPokemon[0].choices = data.startingPokemon;

    const trainer = new Trainer(
      makePokemon(userPokemon[0]),
      makePokemon(userPokemon[1]),
      makePokemon(userPokemon[2]),
      makePokemon(userPokemon[3]),
      makePokemon(userPokemon[4]),
      makePokemon(userPokemon[5]),
      data.name
    );

    return trainer;
  })
  .then((players) => {
    return Promise.all([players, inquirer.prompt(userStartingPokemon)]);
  })
  .then((battleData) => {
    const trainer = battleData[0];
    const chosenPokemon = battleData[1].chosenPokemon;

    const opponentInfo = opponentChoices("Hard", trainer, chosenPokemon);
    const opponent = opponentInfo.opponent;
    const opponentPokemon = opponentInfo.opponentChoice;

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
