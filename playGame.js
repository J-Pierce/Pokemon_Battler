const inquirer = require('inquirer');
const {Pokemon, Normal, Fire, Water, Grass, Pokeball, Trainer, Battle} = require("./pokemon")
const makePokemon = require("./pokemonCreator")

const pokemonList = makePokemon()

const pokemonChoices = [
                        "Eevee",
                        "Flareon",
                        "Vaporeon",
                        "Leafeon",
                        "Charmander",
                        "Squirtle",
                        "Bulbasaur"
                        ]

let name
let pokemonChoice1

const firstQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Ash',
  },
  {
    type: 'list',
    name: 'pokemon',
    message: 'Which pokemon do you choose?',
    choices: pokemonChoices,
  },
];

const secondQuestions = [
    {
        type: 'list',
        name: 'pokemon',
        message: 'Which pokemon do you wish to battle?',
        choices: pokemonChoices,
      },
];

function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {

        name = firstAnswers.name
        pokemonChoice1 = firstAnswers.pokemon

        return inquirer.prompt(secondQuestions);
    })
    .then(function (secondAnswers) {

        const pokemon1 = pokemonList[pokemonChoice1]
        
        const pokemonChoice2 = secondAnswers.pokemon
        const pokemon2 = pokemonList[pokemonChoice2]
        
        const trainer1 = new Trainer(pokemon1)
        const trainer2 = new Trainer(pokemon2)
        
        console.log("\n\nBattle begins:\n\n")
        const battle = new Battle(trainer1,pokemonChoice1,trainer2,pokemonChoice2)
        battle.fight()
        return
    })
}

playGame();