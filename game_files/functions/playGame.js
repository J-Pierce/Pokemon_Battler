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
const {
  opponentBelt,
  opponentFightChoice,
  opponentChooseMove,
} = require("./opponentChoices.js");

const userBelt = [
  {
    type: "list",
    name: "difficulty",
    message: "What game difficulty would you like to play?",
    choices: ["Easy", "Hard"],
  },
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
    message: "Which pokemon would you like to send out to battle",
    choices: [],
  },
];

const pokemonMoves = [
  {
    type: "list",
    name: "pokemonMove",
    message: "Which move would you like to use",
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

async function playerChoosePokemon(battle) {
  try {
    const pokemonAlive = [];
    if (battle.playerPokemonFainted > 0) {
      for (const pokeball in battle.player.belt) {
        if (!battle.player.belt[pokeball].pokemonInside.hasFainted()) {
          pokemonAlive.push(battle.player.belt[pokeball].pokemonInside.name);
        }
      }
    } else {
      for (const pokeball in battle.player.belt) {
        pokemonAlive.push(battle.player.belt[pokeball].pokemonInside.name);
      }
    }

    userStartingPokemon[0].choices = pokemonAlive;

    return inquirer.prompt(userStartingPokemon);
  } catch (err) {
    console.log(err);
  }
}

async function playerChooseMove(playerPokemon) {
  try {
    const pokemonMoveList = Object.keys(playerPokemon.moves);
    pokemonMoves[0].choices = pokemonMoveList;
    const playerMove = await inquirer.prompt(pokemonMoves);
    return playerMove.pokemonMove;
  } catch (error) {
    console.log(error);
  }
}

async function pokemonFight(battle, playerChoice) {
  // console.log("Battle: ", battle);
  // console.log("Difficulty: ", difficulty);
  // console.log("Player choice: ", playerChoice);

  const playerPokemonChosen = playerChoice.chosenPokemon;
  const opponentPokemonChosen = opponentFightChoice(
    battle.difficulty,
    battle.opponent.belt,
    playerPokemonChosen
  );

  const playerPokemon = battle.player.getPokemon(playerPokemonChosen);
  const opponentPokemon = battle.opponent.getPokemon(opponentPokemonChosen);

  console.log(
    `\n${playerPokemon.name}'s starting HP: ${playerPokemon.hitPoints}`
  );
  console.log(
    `${opponentPokemon.name}'s starting HP: ${opponentPokemon.hitPoints}`
  );

  while (!playerPokemon.hasFainted() && !opponentPokemon.hasFainted()) {
    console.log("\n\nNew Round!:");

    let faster;
    let fasterMove;
    let slower;
    let slowerMove;

    const playerMove = await playerChooseMove(playerPokemon);

    const opponentMove = opponentChooseMove(opponentPokemon);

    if (playerPokemon.speed > opponentPokemon.speed) {
      faster = playerPokemon;
      fasterMove = playerMove;
      slower = opponentPokemon;
      slowerMove = opponentMove;

      console.log(
        `${battle.player.name}'s Pokemon ${playerPokemon.name} is faster, they attack first!`
      );
    } else if (playerPokemon.speed < opponentPokemon.speed) {
      faster = opponentPokemon;
      fasterMove = opponentMove;
      slower = playerPokemon;
      slowerMove = playerMove;

      console.log(
        `${battle.opponent.name}'s Pokemon ${opponentPokemon.name} is faster, they attack first!`
      );
    } else {
      const rand = Math.random();
      console.log(`Both Pokemon have the same speed, it's anyones game!`);
      if (rand < 0.5) {
        faster = playerPokemon;
        fasterMove = playerMove;
        slower = opponentPokemon;
        slowerMove = opponentMove;

        console.log(
          `${battle.player.name}'s Pokemon ${playerPokemon.name} attacks first!`
        );
      } else {
        faster = opponentPokemon;
        fasterMove = opponentMove;
        slower = playerPokemon;
        slowerMove = playerMove;

        console.log(
          `${battle.opponent.name}'s Pokemon ${opponentPokemon.name} attacks first!`
        );
      }
    }

    battle.attack(faster, slower, fasterMove);

    if (!playerPokemon.hasFainted() && !opponentPokemon.hasFainted()) {
      battle.attack(slower, faster, slowerMove);
    }
  }
  if (playerPokemon.hasFainted() && !opponentPokemon.hasFainted()) {
    console.log(
      `\n\n${playerPokemon.name} has fainted, ${opponentPokemon.name} has won the fight!\n\n`
    );
    battle.playerPokemonFainted++;
  }
  if (!playerPokemon.hasFainted() && opponentPokemon.hasFainted()) {
    console.log(
      `\n\n${opponentPokemon.name} has fainted, ${playerPokemon.name} has won the fight!\n\n`
    );
    battle.opponentPokemonFainted++;
  }

  battle.player.catch(playerPokemon);
  battle.opponent.catch(opponentPokemon);
}

async function runBattle(battle) {
  try {
    while (
      battle.playerPokemonFainted < 6 &&
      battle.opponentPokemonFainted < 6
    ) {
      let playerChoice = await playerChoosePokemon(battle);
      await pokemonFight(battle, playerChoice);

      if (battle.playerPokemonFainted === 6) {
        console.log(
          `\n\nAll of ${battle.player.name}'s Pokemon have fainted ... ${battle.opponent.name} wins the Battle !!!`
        );
      }
      if (battle.opponentPokemonFainted === 6) {
        console.log(
          `\n\nAll of ${battle.opponent.name}'s Pokemon have fainted ... ${battle.player.name} wins the Battle !!!`
        );
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function playGame() {
  try {
    const firstQuestion = await chooseStartingPokemon(userBelt);
    const userPokemon = firstQuestion.startingPokemon;

    const difficulty = firstQuestion.difficulty;
    const trainer = new Trainer(
      makePokemon(userPokemon[0]),
      makePokemon(userPokemon[1]),
      makePokemon(userPokemon[2]),
      makePokemon(userPokemon[3]),
      makePokemon(userPokemon[4]),
      makePokemon(userPokemon[5]),
      firstQuestion.name
    );

    const opponent = opponentBelt(difficulty, trainer);
    const battle = new Battle(difficulty, trainer, opponent);

    await runBattle(battle);
  } catch (error) {
    console.log(error);
  }
}

playGame();

// .then((battle) => {
//   fight(battle);
// });

/*
 next steps I want to add:
  ✅ choose next pokemon out of ones left (not fainted) to go into battle
  ✅ carry on choosing and battling until all 6 pokemon in a players belt have fainted
  ✅ player with pokemon left wins 

  ✅ opponent chooses belt pokemon and pokemon to battle automatically (no user input)
  ✅ can set opponents difficulty to effect how strategically effective its choices are
  - add loading spinner (node-spinner)
Recommended next steps:
✅ critical hit system randomly awards pokemon triple damage
- ability to swap pokemon mid battle, uses up attack for that round
✅ pokemon have multiple moves user can select each round
    ✅ move modifies attack damage
    ✅moves have a finite amount of uses determined by its PP (power points)
    - once PP runs out move cant be used
    - when all moves have run out pokemon 'struggles' damaging itself with its base attack damage
*/
