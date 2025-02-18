const { Pokeball } = require("./pokeballClass");

class Trainer {
  constructor(
    pokemon1,
    pokemon2,
    pokemon3,
    pokemon4,
    pokemon5,
    pokemon6,
    name = "Ash"
  ) {
    this.name = name;
    this.belt = {
      1: new Pokeball(pokemon1),
      2: new Pokeball(pokemon2),
      3: new Pokeball(pokemon3),
      4: new Pokeball(pokemon4),
      5: new Pokeball(pokemon5),
      6: new Pokeball(pokemon6),
    };
  }
  catch(pokemon) {
    let isCaught = false;
    for (let position in this.belt) {
      if (isCaught === false) {
        if (this.belt[position].pokemonInside === "Empty") {
          this.belt[position].throw(pokemon);
          isCaught = true;
        }
      }
    }
    if (isCaught === false) {
      console.log(
        `Cannot catch ${pokemon.name}, All pokeballs on your belt are full!`
      );
    }
  }
  getPokemon(pokemonName) {
    let onBelt = false;
    for (let position in this.belt) {
      if (onBelt === false) {
        if (this.belt[position].pokemonInside.name === pokemonName) {
          onBelt = true;
          return this.belt[position].throw();
        }
      }
    }
    if (onBelt === false) {
      console.log(`Cannot throw ${pokemonName}, they are not on your belt!`);
    }
  }
}

module.exports = { Trainer };
