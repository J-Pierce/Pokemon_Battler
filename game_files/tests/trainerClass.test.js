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
const { makePokemon } = require("../functions/pokemonCreator");

let pokemonList;
let consolespy;

beforeEach(() => {
  pokemonList = makePokemon();
  consolespy = jest.spyOn(console, "log");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Test class - Trainer", () => {
  describe("Creates new class - Trainer", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const trainer = new Trainer();

      // Act
      const belt = trainer.belt;
      const name = trainer.name;

      //Assert
      expect(name).toBe("Ash");
      expect(belt).toEqual({
        1: new Pokeball(),
        2: new Pokeball(),
        3: new Pokeball(),
        4: new Pokeball(),
        5: new Pokeball(),
        6: new Pokeball(),
      });
    });

    test("Check class is Trainer class", () => {
      //Arrange
      const trainer = new Trainer();

      //Act
      const ouput = trainer instanceof Trainer;

      //Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Trainer", () => {
    describe("check catch method of Trainer", () => {
      test("On a pokemon with an empty belt", () => {
        //Arrange
        const pokemon = pokemonList["Eevee"];
        const trainer = new Trainer();

        //Act
        const output = trainer.catch(pokemon);

        //Assert
        expect(trainer.belt[1].contains()).toBe("Eevee");
      });

      test("On a pokemon when belt already has one pokemon", () => {
        //Arrange
        const pokemon = pokemonList["Eevee"];
        const testPokemon = pokemonList["Charmander"];
        const trainer = new Trainer(pokemon);

        //Act
        const output = trainer.catch(testPokemon);

        //Assert
        expect(trainer.belt[1].contains()).toBe("Eevee");
        expect(trainer.belt[2].contains()).toBe("Charmander");
      });

      test("On a pokemon when belt already has 6 pokemon", () => {
        const pokemon1 = pokemonList["Eevee"];
        const pokemon2 = pokemonList["Eevee"];
        const pokemon3 = pokemonList["Eevee"];
        const pokemon4 = pokemonList["Eevee"];
        const pokemon5 = pokemonList["Eevee"];
        const pokemon6 = pokemonList["Eevee"];
        const testPokemon = pokemonList["Charmander"];
        const trainer = new Trainer(
          pokemon1,
          pokemon2,
          pokemon3,
          pokemon4,
          pokemon5,
          pokemon6
        );

        //Act
        const output = trainer.catch(testPokemon);

        //Assert
        expect(consolespy).toHaveBeenCalledWith(
          "Cannot catch Charmander, All pokeballs on your belt are full!"
        );
      });
    });
    describe("Check getPokemon method of Trainer", () => {
      test("With a belt with one pokemon", () => {
        //Arrange
        const pokemon = pokemonList["Eevee"];
        const trainer = new Trainer(pokemon);

        //Act
        const output = trainer.getPokemon("Eevee");

        //Assert
        expect(output).toBe(pokemon);
      });

      test("With a belt of 6 pokemon", () => {
        const pokemon1 = pokemonList["Eevee"];
        const pokemon2 = pokemonList["Flareon"];
        const pokemon3 = pokemonList["Bulbasaur"];
        const pokemon4 = pokemonList["Vaporeon"];
        const pokemon5 = pokemonList["Squirtle"];
        const pokemon6 = pokemonList["Charmander"];
        const trainer = new Trainer(
          pokemon1,
          pokemon2,
          pokemon3,
          pokemon4,
          pokemon5,
          pokemon6
        );
        console.log(trainer);
        //Act
        const output = trainer.getPokemon("Charmander");

        //Assert
        expect(output).toBe(pokemon6);
      });
    });
  });
});
