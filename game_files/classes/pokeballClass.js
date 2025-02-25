class Pokeball {
  constructor(pokemon = "Empty") {
    this.pokemonInside = pokemon;
  }
  throw(pokemon = "notCatching") {
    console.log("Throwing Pokeball!");

    if (pokemon === "notCatching") {
      console.log(`GO ${this.pokemonInside.name}!!`);
      const returnPokemon = this.pokemonInside;
      this.pokemonInside = "Empty";
      console.log("\t... Pokeball is now empty\n");
      return returnPokemon;
    } else {
      if (this.pokemonInside === "Empty") {
        this.pokemonInside = pokemon;
        console.log(`\t... caught ${pokemon.name}!`);
      } else {
        console.log(`Cannot catch ${pokemon.name}, Pokeball is full!`);
      }
    }
  }
  isEmpty() {
    if ((this.pokemonInside = "Empty")) {
      return true;
    } else {
      return false;
    }
  }
  contains() {
    if (this.pokemonInside === "Empty") {
      return "... empty";
    } else {
      return this.pokemonInside.name;
    }
  }
}

module.exports = { Pokeball };
