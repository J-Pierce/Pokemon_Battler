const makePokemon = require("./game_files/pokemonCreator")
const inquirer = require('inquirer');

const pokemonChoices = Object.keys(makePokemon())

function chooseStartingPokemon () {
    
    const list = inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: 'Ash',
    },{
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

        console.log("Your starting belt now contains: ", answer.startingPokemon);
        return answer
    })
    
    return list
};


// .then(inquirer.prompt([
//     {
//     type: 'chosenPokemon',
//     name: 'pokemon',
//     message: 'Which pokemon do you want to send out first?',
//     choices: answer.startingPokemon,
//     }])
// .then((answer) => {
//     console.log(answer)
// }))

const list = chooseStartingPokemon();

