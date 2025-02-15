// Create Pokemon
class Pokemon {
    constructor (name, hitPoints, attackDamage, move) {
        this.name = name
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move
    }
    takeDamage (damage) {
        if (this.hitPoints - damage > 0) {
            this.hitPoints -= damage
        } else (
            this.hitPoints = 0
        )
    }
    useMove () {
        console.log(`\t${this.name} used ${this.move}`)
        return this.attackDamage
    }
    hasFainted () {
        if (this.hitPoints > 0) {
            return false
        } else {
            return true
        }
    }
}

// Add Types
class Normal extends Pokemon {
    constructor (name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move)
        this.type = "Normal"
    }
    isEffectiveAgainst (pokemon) {
        return false
    }
    isWeakTo (pokemon) {
        return false
    }
}
class Fire extends Pokemon {
    constructor (name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move)
        this.type = "Fire"
    }
    isEffectiveAgainst (pokemon) {
        if (pokemon.type === "Grass"){
            return true
        } else {
            return false
        }
    }
    isWeakTo (pokemon) {
        if (pokemon.type === "Water"){
            return true
        } else {
            return false
        }
    }
}
class Water extends Pokemon {
    constructor (name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move)
        this.type = "Water"
    }
    isEffectiveAgainst (pokemon) {
        if (pokemon.type === "Fire"){
            return true
        } else {
            return false
        }
    }
    isWeakTo (pokemon) {
        if (pokemon.type === "Grass"){
            return true
        } else {
            return false
        }
    }
}
class Grass extends Pokemon {
    constructor (name, hitPoints, attackDamage, move) {
        super(name, hitPoints, attackDamage, move)
        this.type = "Grass"
    }
    isEffectiveAgainst (pokemon) {
        if (pokemon.type === "Water"){
            return true
        } else {
            return false
        }
    }
    isWeakTo (pokemon) {
        if (pokemon.type === "Fire"){
            return true
        } else {
            return false
        }
    }
}

// Create Pokeballs
class Pokeball {
    constructor (pokemon = "Empty") {
        this.pokemonInside = pokemon
    }
    throw (pokemon = "notCatching") {
        console.log("Throwing Pokeball!")
        if(pokemon === "notCatching") {
            console.log(`GO ${this.pokemonInside.name}!!`)
            const returnPokemon = this.pokemonInside
            this.pokemonInside = "Empty"
            console.log("\t... Pokeball is now empty\n")
            return returnPokemon
        } else {
            if (this.pokemonInside === "Empty") {
                this.pokemonInside = pokemon
                console.log(`You caught ${pokemon.name}!`)
            } else {
                console.log(`Cannot catch ${pokemon.name}, Pokeball is full!`)
            }
        } 
    }
    isEmpty() {
        if (this.pokemonInside = "Empty") {
            return true
        } else {
            return false
        }
    }
    contains () {
        if (this.pokemonInside === "Empty") {
            return "... empty"
        } else {
            return this.pokemonInside.name
        }
    }
}

// Creates Trainer
class Trainer {
    constructor (pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, name = "Ash")
     {
        this.name = name
        this.belt = {
            1 : new Pokeball(pokemon1), 
            2 : new Pokeball(pokemon2), 
            3 : new Pokeball(pokemon3), 
            4 : new Pokeball(pokemon4), 
            5 : new Pokeball(pokemon5), 
            6 : new Pokeball(pokemon6)
        }
    }
    catch (pokemon) {
        let isCaught = false
        for (let position in this.belt) {
            if (isCaught === false) {
                if (this.belt[position].pokemonInside === "Empty") {
                    this.belt[position].throw(pokemon)
                    isCaught = true
                }
            }
        }
        if (isCaught === false) {
            console.log(`Cannot catch ${pokemon.name}, All pokeballs on your belt are full!`)
        }
    }
    getPokemon (pokemonName) {
        let onBelt = false
        for (let position in this.belt){
            if (onBelt === false) {
                if (this.belt[position].pokemonInside.name === pokemonName) {
                    onBelt = true
                    return this.belt[position].throw()
                }
            }
        }
        if (onBelt === false) {
            console.log(`Cannot throw ${pokemonName}, they are not on your belt!`)
        }
    }
}



// Creates Pokemon Battle
class Battle {
    constructor (trainer1, choice1, trainer2, choice2) {
        this.trainer1 = trainer1
        this.pokemon1 = trainer1.getPokemon(choice1)
        this.trainer2 = trainer2
        this.pokemon2 = trainer2.getPokemon(choice2)
    }

    attack (attacker, defender) {
        if(defender.isEffectiveAgainst(attacker)){
            defender.takeDamage(attacker.useMove() * 0.75)
            console.log("\tIt's not very effective!")
            console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`)
        }
        else if(defender.isWeakTo(attacker)){
            defender.takeDamage(attacker.useMove() * 1.25)
            console.log("\tIt's super effective!")
            console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`)
        }
        else {
            defender.takeDamage(attacker.useMove())
            console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`)
        }
    }

    fight () {
        
        let winner
        let loser
        console.log(`\n${this.pokemon1.name}'s starting HP: ${this.pokemon1.hitPoints}`)
        console.log(`${this.pokemon2.name}'s starting HP: ${this.pokemon2.hitPoints}`)

        while (!this.pokemon1.hasFainted() && !this.pokemon2.hasFainted()) {
            console.log("\nNew Round!:\n")
            this.attack(this.pokemon1, this.pokemon2)
            
            if(!this.pokemon1.hasFainted() && !this.pokemon2.hasFainted()) {
                this.attack(this.pokemon2, this.pokemon1)
            }
        }
        if(this.pokemon1.hasFainted() && !this.pokemon2.hasFainted()) {
            console.log(`\n\n${this.pokemon1.name} has fainted, ${this.pokemon2.name} has won the battle!\n\n`)
        }
        if(!this.pokemon1.hasFainted() && this.pokemon2.hasFainted()) {
            console.log(`\n\n${this.pokemon2.name} has fainted, ${this.pokemon1.name} has won the battle!\n\n`)
        }  
    }
}
module.exports = {Pokemon, Normal, Fire, Water, Grass, Pokeball, Trainer, Battle} 