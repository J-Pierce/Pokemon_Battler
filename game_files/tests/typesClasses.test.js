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

describe("\nTest class - Normal", () => {
  describe("Creates new class - Normal", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      // Act
      const outputName = pokemon.name;
      const outputHitPoints = pokemon.hitPoints;
      const outputAttackDamage = pokemon.attackDamage;
      const outputMove = pokemon.move;
      const outputType = pokemon.type;

      //Assert
      expect(outputName).toBe("Eevee");
      expect(outputHitPoints).toBe(55);
      expect(outputAttackDamage).toBe(18);
      expect(outputMove).toBe("Headbutt");
      expect(outputType).toBe("Normal");
    });

    test("Check class is Normal class", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];

      //Act
      const ouput = pokemon instanceof Normal;

      //Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Normal", () => {
    test("isEffectiveAgainst returns false against any type", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const testPokemon = pokemonList["Flareon"];

      // Act
      output = pokemon.isEffectiveAgainst(testPokemon);

      //Assert
      expect(output).toBe(false);
    });

    test("isWeakTo returns false against any type", () => {
      // Arrange
      const pokemon = pokemonList["Eevee"];
      const testPokemon = pokemonList["Flareon"];

      // Act
      output = pokemon.isWeakTo(testPokemon);

      //Assert
      expect(output).toBe(false);
    });
  });
});
describe("\nTest class - Fire", () => {
  describe("Creates new class - Fire", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const pokemon = pokemonList["Flareon"];

      // Act
      const outputName = pokemon.name;
      const outputHitPoints = pokemon.hitPoints;
      const outputAttackDamage = pokemon.attackDamage;
      const outputMove = pokemon.move;
      const outputType = pokemon.type;

      //Assert
      expect(outputName).toBe("Flareon");
      expect(outputHitPoints).toBe(65);
      expect(outputAttackDamage).toBe(20);
      expect(outputMove).toBe("Fire blast");
      expect(outputType).toBe("Fire");
    });

    test("Check class is Fire class", () => {
      // Arrange
      const pokemon = pokemonList["Flareon"];

      //Act
      const ouput = pokemon instanceof Fire;

      //Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Fire", () => {
    test("isEffectiveAgainst returns true against Grass", () => {
      // Arrange
      const pokemon = pokemonList["Flareon"];
      const testPokemon = pokemonList["Leafeon"];

      // Act
      output = pokemon.isEffectiveAgainst(testPokemon);

      //Assert
      expect(output).toBe(true);
    });

    test("isWeakTo returns true against Water", () => {
      // Arrange
      const pokemon = pokemonList["Flareon"];
      const testPokemon = pokemonList["Vaporeon"];

      // Act
      output = pokemon.isWeakTo(testPokemon);

      //Assert
      expect(output).toBe(true);
    });
  });
});
describe("\nTest class - Water", () => {
  describe("Creates new class - Water", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const pokemon = pokemonList["Vaporeon"];

      // Act
      const outputName = pokemon.name;
      const outputHitPoints = pokemon.hitPoints;
      const outputAttackDamage = pokemon.attackDamage;
      const outputMove = pokemon.move;
      const outputType = pokemon.type;

      //Assert
      expect(outputName).toBe("Vaporeon");
      expect(outputHitPoints).toBe(70);
      expect(outputAttackDamage).toBe(19);
      expect(outputMove).toBe("Hydro pump");
      expect(outputType).toBe("Water");
    });

    test("Check class is Water class", () => {
      // Arrange
      const pokemon = pokemonList["Vaporeon"];

      //Act
      const ouput = pokemon instanceof Water;

      //Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Water", () => {
    test("isEffectiveAgainst returns true against Fire", () => {
      // Arrange
      const pokemon = pokemonList["Vaporeon"];
      const testPokemon = pokemonList["Flareon"];

      // Act
      output = pokemon.isEffectiveAgainst(testPokemon);

      //Assert
      expect(output).toBe(true);
    });

    test("isWeakTo returns true against Grass", () => {
      // Arrange
      const pokemon = pokemonList["Vaporeon"];
      const testPokemon = pokemonList["Leafeon"];

      // Act
      output = pokemon.isWeakTo(testPokemon);

      //Assert
      expect(output).toBe(true);
    });
  });
});
describe("\nTest class - Grass", () => {
  describe("Creates new class - Grass", () => {
    test("Check class has initial properties", () => {
      // Arrange
      const pokemon = pokemonList["Leafeon"];

      // Act
      const outputName = pokemon.name;
      const outputHitPoints = pokemon.hitPoints;
      const outputAttackDamage = pokemon.attackDamage;
      const outputMove = pokemon.move;
      const outputType = pokemon.type;

      //Assert
      expect(outputName).toBe("Leafeon");
      expect(outputHitPoints).toBe(65);
      expect(outputAttackDamage).toBe(17);
      expect(outputMove).toBe("Giga drain");
      expect(outputType).toBe("Grass");
    });

    test("Check class is Grass class", () => {
      // Arrange
      const pokemon = pokemonList["Leafeon"];

      //Act
      const ouput = pokemon instanceof Grass;

      //Assert
      expect(ouput).toBe(true);
    });
  });
  describe("Check methods of Grass", () => {
    test("isEffectiveAgainst returns true against Water", () => {
      // Arrange
      const pokemon = pokemonList["Leafeon"];
      const testPokemon = pokemonList["Vaporeon"];

      // Act
      output = pokemon.isEffectiveAgainst(testPokemon);

      //Assert
      expect(output).toBe(true);
    });

    test("isWeakTo returns true against Fire", () => {
      // Arrange
      const pokemon = pokemonList["Leafeon"];
      const testPokemon = pokemonList["Flareon"];

      // Act
      output = pokemon.isWeakTo(testPokemon);

      //Assert
      expect(output).toBe(true);
    });
  });
});
