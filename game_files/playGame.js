const inquirer = require('inquirer');
const {Pokemon, Normal, Fire, Water, Grass, Pokeball, Trainer, Battle} = require("./pokemon")
const makePokemon = require("./pokemonCreator")

const pokemonChoices = Object.keys(makePokemon())

let name
let trainer
let chosenPokemon

function chooseStartingPokemon () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            default: 'Ash',
        },
        {
          name: "startingPokemon",
          type: "checkbox",
          message: "Choose 6 pokemon to equip to your belt:",
          loop: false,
          choices: pokemonChoices,
    }])
    .then((answer) => {
        if (answer.startingPokemon.length < 6) {
            console.log("That wasn't enough pokemon, you need to choose 6!");
            chooseStartingPokemon();
        }
        else if (answer.startingPokemon.length > 6) {
            console.log("That was too many pokemon, you need to choose 6!");
            chooseStartingPokemon();
        }
        name = answer.name
        trainer = new Trainer(answer.startingPokemon[0], answer.startingPokemon[1], answer.startingPokemon[2], answer.startingPokemon[3], answer.startingPokemon[4], answer.startingPokemon[5])
        trainer.name = name
        console.log(trainer)
        console.log("Your name is: ", name)
        console.log("Your starting belt now contains: ",);
        return answer
    })
    .then((answer) => {
        inquirer.prompt([
            {
              name: "chosenPokemon",
              type: "list",
              message: "Choose which pokemon from your belt to battle first!:",
              loop: false,
              choices: answer.startingPokemon
            }])
          .then((answer) => {
            chosenPokemon = answer.chosenPokemon
            console.log(trainer)
            console.log(chosenPokemon)
          })

    .then(() => {
        inquirer.prompt([
            {
                name: "opponentPokemon",
                type: "checkbox",
                message: "Choose which pokemon you want to battle:",
                loop: false,
                choices: pokemonChoices,
            }])
            .then((out) => {
                console.log(out)
                const opponentPokemon = out.opponentPokemon
                console.log(opponentPokemon)
            })
         })
    })      
  };

chooseStartingPokemon()
