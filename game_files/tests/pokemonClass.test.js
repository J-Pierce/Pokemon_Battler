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

describe("Test class - Pokemon", () => {
  describe("Creates new class - Pokemon", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

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
    });

    test("Check class is Pokemon class", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      // Act
      const ouput = pokemon instanceof Pokemon;

      // Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Pokemon", () => {
    test("attachDamage reduces health by given number", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      // Act
      pokemon.takeDamage(10);

      // Assert
      expect(pokemon.hitPoints).toBe(45);
    });

    test("useMove returns attack damage and console logs correct statemnt", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      // Act
      const output = pokemon.useMove();

      // Assert
      expect(output).toBe(18);
      expect(consolespy).toHaveBeenCalledWith("\n\tEevee used Headbutt");
    });

    test("hasFainted returns false if a pokemon hasn't fainted", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      // Act
      const output = pokemon.hasFainted();

      // Assert
      expect(output).toBe(false);
    });

    test("hasFainted returns true if a pokemon has fainted", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      // Act
      pokemon.takeDamage(57);
      const output = pokemon.hasFainted();

      // Assert
      expect(output).toBe(true);
    });
  });
});
