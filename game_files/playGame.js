const inquirer = require('inquirer');
const {Pokemon, Normal, Fire, Water, Grass, Pokeball, Trainer, Battle} = require("./pokemon")
const makePokemon = require("./pokemonCreator")

const pokemonChoices = Object.keys(makePokemon())

let name
let pokemonChoice1
let beltSelection

const zeroQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'Ash',
    },
    {
    type: 'checkbox',
    name: 'pokemon',
    require: false,
    message: 'Choose 6 pokemon to equip to your belt!',
    choices: pokemonChoices,
    }
]

const firstQuestions = [
    {
    type: 'list',
    name: 'pokemon',
    message: 'Which pokemon do you want to send out first?',
    choices: pokemonChoices,
    }
];

const secondQuestions = [
    {
    type: 'list',
    name: 'pokemon',
    message: 'Which pokemon do you wish to battle?',
    choices: pokemonChoices,
    }
];

function playGame() {
    
    inquirer.prompt(zeroQuestions)
    
    .then(function (zeroAnswers)
    {   
        name = zeroAnswers.name
        beltSelection = zeroAnswers.pokemon
        return inquirer.prompt(firstQuestions)
    })

    .then(function (firstAnswers) 
    { 
        pokemonChoice1 = firstAnswers.pokemon
        return inquirer.prompt(secondQuestions);
    })
    .then(function(secondAnswers) 
    {
        const pokemon1 = makePokemon(pokemonChoice1)
        
        const pokemonChoice2 = secondAnswers.pokemon
        const pokemon2 = makePokemon(pokemonChoice2)
        
        const trainer1 = new Trainer(pokemon1)
        const trainer2 = new Trainer(pokemon2)
        
        console.log("\n\nBattle begins:\n\n")
        const battle = new Battle(trainer1,pokemonChoice1,trainer2,pokemonChoice2)
        battle.fight()
        return
    })
}

playGame();