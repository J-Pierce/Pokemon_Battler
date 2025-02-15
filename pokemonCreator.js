const {Pokemon, Normal, Fire, Water, Grass} = require("./pokemon")

function makePokemon() {
    const eevee = new Normal ("Eevee", 55, 18, "Headbutt")
    const flareon = new Fire ("Flareon", 65, 20, "Fire blast")
    const vaporeon = new Water ("Vaporeon", 70, 19, "Hydro pump")
    const leafeon = new Grass ("Leafeon", 65, 17, "Giga drain")
    const charmander = new Fire ("Charmander", 44, 17, "Flamethrower")
    const squirtle = new Water ("Squirtle", 44, 16, "Surf")
    const bulbasaur = new Grass ("Buldbasaur", 45, 16, "Razor leaf")

    const pokemonList = { 
        Eevee : eevee,
        Flareon : flareon,
        Vaporeon : vaporeon,
        Leafeon : leafeon,
        Charmander : charmander,
        Squirtle : squirtle,
        Bulbasaur : bulbasaur
        }

    return pokemonList
}



module.exports = makePokemon