const {Pokemon, Normal, Fire, Water, Grass, Pokeball, Trainer, Battle} = require("./pokemon")
const makePokemon = require("./pokemonCreator")

let pokemonList
let consolespy

beforeEach(() => {
        pokemonList = makePokemon()
        consolespy = jest.spyOn(console, "log")
})

afterEach(() => {
    jest.clearAllMocks();
  });

describe("Test class - Pokemon", ()=>{
    describe("Creates new class - Pokemon", () => {
        test("Check class has initial properties", ()=>
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            // Act
            const outputName = pokemon.name;
            const outputHitPoints = pokemon.hitPoints;
            const outputAttackDamage = pokemon.attackDamage;
            const outputMove = pokemon.move;

            // Assert
            expect(outputName).toBe("Eevee");
            expect(outputHitPoints).toBe(55);
            expect(outputAttackDamage).toBe(18);
            expect(outputMove).toBe("Headbutt");
        })

        test("Check class is Pokemon class",()=>
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            // Act
            const ouput = pokemon instanceof Pokemon;

            // Assert
            expect(ouput).toBe(true);
        })
    }) 
    describe("Check methods of Pokemon",()=>
    {
        test("attachDamage reduces health by given number",()=>
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            // Act
            pokemon.takeDamage(10);

            // Assert
            expect(pokemon.hitPoints).toBe(45);
        })

        test("useMove returns attack damage and console logs correct statemnt",()=>
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            
            // Act
            const output = pokemon.useMove();

            // Assert
            expect(output).toBe(18);
            expect(consolespy).toHaveBeenCalledWith("\n\tEevee used Headbutt")
        })

        test("hasFainted returns false if a pokemon hasn't fainted", () => 
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            // Act
            const output = pokemon.hasFainted();

            // Assert
            expect(output).toBe(false);
        })

        test("hasFainted returns true if a pokemon has fainted", () => 
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            // Act
            pokemon.takeDamage(57)
            const output = pokemon.hasFainted();

            // Assert
            expect(output).toBe(true);
        })
    })
})
describe("\nTest class - Normal", ()=>{
    describe("Creates new class - Normal", () => 
    {
        test("Check class has initial properties", () => 
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            // Act
            const outputName = pokemon.name;
            const outputHitPoints = pokemon.hitPoints;
            const outputAttackDamage = pokemon.attackDamage;
            const outputMove = pokemon.move;
            const outputType = pokemon.type
            
            //Assert
            expect(outputName).toBe("Eevee");
            expect(outputHitPoints).toBe(55);
            expect(outputAttackDamage).toBe(18);
            expect(outputMove).toBe("Headbutt");
            expect(outputType).toBe("Normal");
            
        })

        test("Check class is Normal class",()=>
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]

            //Act
            const ouput = pokemon instanceof Normal;
            
            //Assert
            expect(ouput).toBe(true);
        })
    })
    describe("Check methods of Normal", () => 
    {
        test("isEffectiveAgainst returns false against any type", () => 
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const testPokemon = pokemonList["Flareon"]
            
            // Act
            output = pokemon.isEffectiveAgainst(testPokemon)
            
            //Assert
            expect(output).toBe(false)
        })

        test("isWeakTo returns false against any type",()=>
        {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const testPokemon = pokemonList["Flareon"]
            
            // Act
            output = pokemon.isWeakTo(testPokemon)
            
            //Assert
            expect(output).toBe(false)
        })
    })
})
describe("\nTest class - Fire", ()=>{
    describe("Creates new class - Fire", () => 
    {
        test("Check class has initial properties", () => 
        {
            // Arrange
            const pokemon = pokemonList["Flareon"]

            // Act
            const outputName = pokemon.name;
            const outputHitPoints = pokemon.hitPoints;
            const outputAttackDamage = pokemon.attackDamage;
            const outputMove = pokemon.move;
            const outputType = pokemon.type
            
            //Assert
            expect(outputName).toBe("Flareon");
            expect(outputHitPoints).toBe(65);
            expect(outputAttackDamage).toBe(20);
            expect(outputMove).toBe("Fire blast");
            expect(outputType).toBe("Fire");
            
        })

        test("Check class is Fire class",()=>
        {
            // Arrange
            const pokemon = pokemonList["Flareon"]

            //Act
            const ouput = pokemon instanceof Fire;
            
            //Assert
            expect(ouput).toBe(true);
        })
    })
    describe("Check methods of Fire", () => 
    {
        test("isEffectiveAgainst returns true against Grass", () => 
        {
            // Arrange
            const pokemon = pokemonList["Flareon"]
            const testPokemon = pokemonList["Leafeon"]
            
            // Act
            output = pokemon.isEffectiveAgainst(testPokemon)
            
            //Assert
            expect(output).toBe(true)
        })

        test("isWeakTo returns true against Water",()=>
        {
            // Arrange
            const pokemon = pokemonList["Flareon"]
            const testPokemon = pokemonList["Vaporeon"]
            
            // Act
            output = pokemon.isWeakTo(testPokemon)
            
            //Assert
            expect(output).toBe(true)
        })
    })
})
describe("\nTest class - Water", ()=>{
    describe("Creates new class - Water", () => 
    {
        test("Check class has initial properties", () => 
        {
            // Arrange
            const pokemon = pokemonList["Vaporeon"]

            // Act
            const outputName = pokemon.name;
            const outputHitPoints = pokemon.hitPoints;
            const outputAttackDamage = pokemon.attackDamage;
            const outputMove = pokemon.move;
            const outputType = pokemon.type
            
            //Assert
            expect(outputName).toBe("Vaporeon");
            expect(outputHitPoints).toBe(70);
            expect(outputAttackDamage).toBe(19);
            expect(outputMove).toBe("Hydro pump");
            expect(outputType).toBe("Water");
            
        })

        test("Check class is Water class",()=>
        {
            // Arrange
            const pokemon = pokemonList["Vaporeon"]

            //Act
            const ouput = pokemon instanceof Water;
            
            //Assert
            expect(ouput).toBe(true);
        })
    })
    describe("Check methods of Water", () => 
    {
        test("isEffectiveAgainst returns true against Fire", () => 
        {
            // Arrange
            const pokemon = pokemonList["Vaporeon"]
            const testPokemon = pokemonList["Flareon"]
            
            // Act
            output = pokemon.isEffectiveAgainst(testPokemon)
            
            //Assert
            expect(output).toBe(true)
        })

        test("isWeakTo returns true against Grass",()=>
        {
            // Arrange
            const pokemon = pokemonList["Vaporeon"]
            const testPokemon = pokemonList["Leafeon"]
            
            // Act
            output = pokemon.isWeakTo(testPokemon)
            
            //Assert
            expect(output).toBe(true)
        })
    })
})
describe("\nTest class - Grass", ()=>{
    describe("Creates new class - Grass", () => 
    {
        test("Check class has initial properties", () => 
        {
            // Arrange
            const pokemon = pokemonList["Leafeon"]

            // Act
            const outputName = pokemon.name;
            const outputHitPoints = pokemon.hitPoints;
            const outputAttackDamage = pokemon.attackDamage;
            const outputMove = pokemon.move;
            const outputType = pokemon.type
            
            //Assert
            expect(outputName).toBe("Leafeon");
            expect(outputHitPoints).toBe(65);
            expect(outputAttackDamage).toBe(17);
            expect(outputMove).toBe("Giga drain");
            expect(outputType).toBe("Grass");
            
        })

        test("Check class is Grass class",()=>
        {
            // Arrange
            const pokemon = pokemonList["Leafeon"]

            //Act
            const ouput = pokemon instanceof Grass;
            
            //Assert
            expect(ouput).toBe(true);
        })
    })
    describe("Check methods of Grass", () => 
    {
        test("isEffectiveAgainst returns true against Water", () => 
        {
            // Arrange
            const pokemon = pokemonList["Leafeon"]
            const testPokemon = pokemonList["Vaporeon"]
            
            // Act
            output = pokemon.isEffectiveAgainst(testPokemon)
            
            //Assert
            expect(output).toBe(true)
        })

        test("isWeakTo returns true against Fire",()=>
        {
            // Arrange
            const pokemon = pokemonList["Leafeon"]
            const testPokemon = pokemonList["Flareon"]
            
            // Act
            output = pokemon.isWeakTo(testPokemon)
            
            //Assert
            expect(output).toBe(true)
        })
    })
})
describe("\n\n\nTest class - Pokeball", () => {
    describe("Creates new class - Pokeball", () => {
        test("Check class has initial properties", () => 
            {
                // Arrange
                const pokeball = new Pokeball()
    
                // Act
                const pokemonInside = pokeball.pokemonInside;

                //Assert
                expect(pokemonInside).toBe("Empty")
            })

        test("Check class is Pokeball class", ()=>
        {
            //Arrange
            const pokeball = new Pokeball();

            //Act
            const ouput = pokeball instanceof Pokeball;
            
            //Assert
            expect(ouput).toBe(true);
            
        })
    })
    describe("Check methods of Pokeball", () => {
        test("Throw captures pokemon when pokeball is empty", () => {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const pokeball = new Pokeball()
            
            //Act
            pokeball.throw(pokemon)
            
            //Assert
            expect(pokeball.pokemonInside).toBe(pokemon);
        })

        test("Throw doesn't capture pokemon when pokeball is full", () => {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const testPokemon = pokemonList["Flareon"]
            const pokeball = new Pokeball()

            //Act
            pokeball.throw(pokemon)
            pokeball.throw(testPokemon)
            
            //Assert
            expect(pokeball.pokemonInside).toBe(pokemon);
        })

        test("When pokemon captured console log correct statement", () => {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const pokeball = new Pokeball()

            //Act
            pokeball.throw(pokemon)

            //Assert
            expect(pokeball.pokemonInside).toBe(pokemon);
            expect(consolespy).toHaveBeenCalledWith("You caught Eevee!")
        })

        test("When Throw called without an argument returns pokemon", () => {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const pokeball = new Pokeball(pokemon)

            //Act
            const output = pokeball.throw()

            //Assert
            expect(output).toBe(pokemon);
        })

        test("When pokemon thrown console logs correct statement", () => {
            // Arrange
            const pokemon = pokemonList["Eevee"]
            const pokeball = new Pokeball(pokemon)

            //Act
            pokeball.throw()

            //Assert
            expect(consolespy).toHaveBeenCalledWith("GO Eevee!!")
            expect(consolespy).toHaveBeenCalledWith("\t... Pokeball is now empty\n")
        })
    })
})
describe("\n\n\nTest class - Trainer", () => {
    describe("Creates new class - Trainer", () => {
        test("Check class has initial properties", () => 
            {
                // Arrange
                const trainer = new Trainer()

                // Act
                const belt = trainer.belt;
                const name = trainer.name

                //Assert
                expect(name).toBe("Ash")
                expect(belt).toEqual({1 : new Pokeball(), 2 : new Pokeball(), 3 : new Pokeball(), 4 : new Pokeball(), 5 : new Pokeball(), 6 : new Pokeball()})
            })

        test("Check class is Trainer class", ()=>
        {
            //Arrange
            const trainer = new Trainer();

            //Act
            const ouput = trainer instanceof Trainer;
            
            //Assert
            expect(ouput).toBe(true);
            
        })
    })
    describe("Check methods of Trainer", () => {
        describe("check catch method of Trainer", ()=>{
            test("On a pokemon with an empty belt", ()=>{
                //Arrange
                const pokemon = pokemonList["Eevee"]
                const trainer = new Trainer()
        
                //Act
                const output = trainer.catch(pokemon)
        
                //Assert
                expect(trainer.belt[1].contains()).toBe("Eevee");
            })

            test("On a pokemon when belt already has one pokemon", ()=>{
                //Arrange
                const pokemon = pokemonList["Eevee"]
                const testPokemon = pokemonList["Charmander"]
                const trainer = new Trainer(pokemon)
                
                //Act
                const output = trainer.catch(testPokemon)

                //Assert
                expect(trainer.belt[1].contains()).toBe("Eevee");
                expect(trainer.belt[2].contains()).toBe("Charmander");
            })

            test("On a pokemon when belt already has 6 pokemon", ()=>{
                const pokemon1 = pokemonList["Eevee"]
                const pokemon2 = pokemonList["Eevee"]
                const pokemon3 = pokemonList["Eevee"]
                const pokemon4 = pokemonList["Eevee"]
                const pokemon5 = pokemonList["Eevee"]
                const pokemon6 = pokemonList["Eevee"]
                const testPokemon = pokemonList["Charmander"]
                const trainer = new Trainer(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6)
                
                //Act
                const output = trainer.catch(testPokemon)

        
                //Assert
                expect(consolespy).toHaveBeenCalledWith("Cannot catch Charmander, All pokeballs on your belt are full!")
            })
        })    
        describe("Check getPokemon method of Trainer", ()=>{
            test("With a belt with one pokemon",()=>
            {
                //Arrange
                const pokemon = pokemonList["Eevee"]
                const trainer = new Trainer(pokemon)

                //Act
                const output = trainer.getPokemon("Eevee")
        
                //Assert
                expect(output).toBe(pokemon);
            })
        
            test("With a belt of 6 pokemon",()=>
            {
                const pokemon1 = pokemonList["Eevee"]
                const pokemon2 = pokemonList["Flareon"]
                const pokemon3 = pokemonList["Bulbasaur"]
                const pokemon4 = pokemonList["Vaporeon"]
                const pokemon5 = pokemonList["Squirtle"]
                const pokemon6 = pokemonList["Charmander"]
                const trainer = new Trainer(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6)
                console.log(trainer)
                //Act
                const output = trainer.getPokemon("Charmander")

                //Assert
                expect(output).toBe(pokemon6);
            })
        })

    })
})
describe("\n\n\nTest class - Battle", () => {
    describe("Create new class - Battle", ()=>{
        test("Instance of class battle", ()=>{
        
            //Arrange
            // Trainer 1
            const pokemon1 = pokemonList["Charmander"]
            const trainer1 = new Trainer(pokemon1)
            
                // Trainer 2
            const pokemon2 = pokemonList["Squirtle"]
            const trainer2 = new Trainer(pokemon2)
            //Act
        
            const battle= new Battle(trainer1, "Charmander", trainer2, "Squirtle")
            const output = battle instanceof Battle;
            
            //Assert
            expect(output).toBe(true);
                
        })
        test("Create a class Battle with correct properties", ()=>
        {
            //Arrange
                // Trainer 1
            const pokemon1 = pokemonList["Charmander"]
            const trainer1 = new Trainer(pokemon1)
            
                // Trainer 2
            const pokemon2 = pokemonList["Squirtle"]
            const trainer2 = new Trainer(pokemon2)
            //Act
        
            const output = new Battle(trainer1, "Charmander", trainer2, "Squirtle")

            console.log(output)

            //Assert
            expect(output.trainer1).toBe(trainer1);
            expect(output.pokemon1.name).toBe("Charmander");
            expect(output.trainer2).toBe(trainer2);
            expect(output.pokemon2.name).toBe("Squirtle");
            
        })
    })
    describe("Check methods of Battle", ()=>{

        beforeEach(()=>{
                // Trainer 1
                pokemon1 = pokemonList["Charmander"]
                trainer1 = new Trainer(pokemon1)
                
                // Trainer 2
                pokemon2 = pokemonList["Squirtle"]
                trainer2 = new Trainer(pokemon2)
        })
    
        test("First attack in fight",()=>
        {
            //Act
     
            const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle")
            console.log(battle.pokemon1, battle.pokemon2)
            battle.attack(battle.pokemon1, battle.pokemon2)

    
            //Assert
            console.log(battle.pokemon2.hitPoints)
            expect(battle.pokemon2.hitPoints).toBe(31.25)
    
        })
       
        test("Stop battle when a pokemon has fainted",()=>
        { 
            //Act
            
            const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle")
            battle.fight()
            
            //Assert
            expect(battle.pokemon1.hasFainted()).toBe(true)
            expect(battle.pokemon2.hasFainted()).toBe(false)
        })
        
        xtest("Console log statement for winning battle",()=>
        {
            //Act
        
            const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle")
            battle.fight()
    
            //Assert
            expect(consolespy).toHaveBeenCalledWith("Charmander has fainted, Squirtle has won the battle!")
        })
        
       
    })
})



