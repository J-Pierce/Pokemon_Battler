const {Pokemon, Normal, Fire, Water, Grass} = require("./pokemon")

function makePokemon(pokemonName = "Empty") {
    const pokemonList = { 
        Eevee : new Normal ("Eevee", 55, 18, "Headbutt"),
        Flareon : new Fire ("Flareon", 65, 20, "Fire blast"),
        Vaporeon : new Water ("Vaporeon", 70, 19, "Hydro pump"),
        Leafeon : new Grass ("Leafeon", 65, 17, "Giga drain"),
        Charmander : new Fire ("Charmander", 44, 17, "Flamethrower"),
        Squirtle : new Water ("Squirtle", 44, 16, "Surf"),
        Bulbasaur : new Grass ("Bulbasaur", 45, 16, "Razor leaf"), 
        Rattata : new Normal ("Rattata", 30, 56, "Tackle")
        }
    
    if (pokemonName === "Empty") {
        return pokemonList
    } else {
        return pokemonList[pokemonName]
    }
}

module.exports = makePokemon
