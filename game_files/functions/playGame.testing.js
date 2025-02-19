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

const userStartingPokemon = [
  {
    type: "list",
    name: "chosenPokemon",
    message: "Which pokemon would you like to send out to battle first?",
    choices: [
      "Flareon",
      "Vaporeon",
      "Leafeon",
      "Charmander",
      "Squirtle",
      "Bulbasaur",
    ],
  },
];

const opponentStartingPokemon = [
  {
    type: "list",
    name: "opponentPokemon",
    message: "Which pokemon should your opponent send out first to battle?",
    loop: false,
    choices: [
      "Flareon",
      "Vaporeon",
      "Leafeon",
      "Charmander",
      "Squirtle",
      "Bulbasaur",
    ],
  },
];

const trainer = new Trainer(
  makePokemon("Flareon"),
  makePokemon("Vaporeon"),
  makePokemon("Leafeon"),
  makePokemon("Charmander"),
  makePokemon("Squirtle"),
  makePokemon("Bulbasaur"),
  "Ash"
);

const opponent = new Trainer(
  makePokemon("Flareon"),
  makePokemon("Vaporeon"),
  makePokemon("Leafeon"),
  makePokemon("Charmander"),
  makePokemon("Squirtle"),
  makePokemon("Bulbasaur"),
  "Opponent"
);

inquirer
  .prompt(userStartingPokemon)
  .then((trainerData) => {
    return Promise.all([trainerData, inquirer.prompt(opponentStartingPokemon)]);
  })
  .then((battleData) => {
    const chosenPokemon = battleData[0]["chosenPokemon"];
    const opponentPokemon = battleData[1]["opponentPokemon"];

    const battle = new Battle(
      trainer,
      chosenPokemon,
      opponent,
      opponentPokemon
    );

    battle.fight();
  });
