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
const { makePokemon, pokemonByType } = require("../functions/pokemonCreator");

let pokemonList;
let consolespy;

beforeEach(() => {
  pokemonList = makePokemon();
  consolespy = jest.spyOn(console, "log");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Test class - Pokeball", () => {
  describe("Creates new class - Pokeball", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const pokeball = new Pokeball();

      // Act
      const pokemonInside = pokeball.pokemonInside;

      //Assert
      expect(pokemonInside).toBe("Empty");
    });

    test("Check class is Pokeball class", () => {
      //Arrange
      const pokeball = new Pokeball();

      //Act
      const ouput = pokeball instanceof Pokeball;

      //Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Pokeball", () => {
    test("Throw captures pokemon when pokeball is empty", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const pokeball = new Pokeball();

      //Act
      pokeball.throw(pokemon);

      //Assert
      expect(pokeball.pokemonInside).toBe(pokemon);
    });

    test("Throw doesn't capture pokemon when pokeball is full", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const testPokemon = pokemonList["Flareon"];
      const pokeball = new Pokeball();

      //Act
      pokeball.throw(pokemon);
      pokeball.throw(testPokemon);

      //Assert
      expect(pokeball.pokemonInside).toBe(pokemon);
    });

    test("When pokemon captured console log correct statement", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const pokeball = new Pokeball();

      //Act
      pokeball.throw(pokemon);

      //Assert
      expect(pokeball.pokemonInside).toBe(pokemon);
      expect(consolespy).toHaveBeenCalledWith("You caught Eevee!");
    });

    test("When Throw called without an argument returns pokemon", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const pokeball = new Pokeball(pokemon);

      //Act
      const output = pokeball.throw();

      //Assert
      expect(output).toBe(pokemon);
    });

    test("When pokemon thrown console logs correct statement", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const pokeball = new Pokeball(pokemon);

      //Act
      pokeball.throw();

      //Assert
      expect(consolespy).toHaveBeenCalledWith("GO Eevee!!");
      expect(consolespy).toHaveBeenCalledWith("\t... Pokeball is now empty\n");
    });
  });
});
