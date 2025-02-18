const {
  Rattata,
  Charmander,
  Squirtle,
  Bulbasaur,
} = require("../classes/namedPokemonClasses");
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

describe("Creates extended classes - namedPokemon", () => {
  test("creates extended class of Charmander", () => {
    //Arrange
    const pokemon = new Charmander("Charmander", 44, 17, "ember");

    //Act
    const outputName = pokemon.name;
    const outputHitpoint = pokemon.hitPoints;
    const outputDamage = pokemon.attackDamage;

    const outputType = pokemon.type;
    const outputMove = pokemon.move;

    //Assert
    expect(outputName).toBe("Charmander");
    expect(outputHitpoint).toBe(44);
    expect(outputDamage).toBe(17);
    expect(outputMove).toBe("ember");
    expect(outputType).toBe("Fire");
  });

  test("creates extended class of Squirtle", () => {
    //Arrange
    const pokemon = new Squirtle("Squirtle", 44, 16, "water gun");

    //Act
    const outputName = pokemon.name;
    const outputHitpoint = pokemon.hitPoints;
    const outputDamage = pokemon.attackDamage;

    const outputType = pokemon.type;
    const outputMove = pokemon.move;

    //Assert
    expect(outputName).toBe("Squirtle");
    expect(outputHitpoint).toBe(44);
    expect(outputDamage).toBe(16);
    expect(outputMove).toBe("water gun");
    expect(outputType).toBe("Water");
  });
  test("creates extended class of Bulbasaur", () => {
    //Arrange
    const pokemon = new Bulbasaur("Bulbasaur", 45, 16, "vine whip");

    //Act
    const outputName = pokemon.name;
    const outputHitpoint = pokemon.hitPoints;
    const outputDamage = pokemon.attackDamage;

    const outputType = pokemon.type;
    const outputMove = pokemon.move;

    //Assert
    expect(outputName).toBe("Bulbasaur");
    expect(outputHitpoint).toBe(45);
    expect(outputDamage).toBe(16);
    expect(outputMove).toBe("vine whip");
    expect(outputType).toBe("Grass");
  });
  test("creates extended class of Rattata", () => {
    //Arrange
    const pokemon = new Rattata("Rattata", 55, 18, "tackle");

    //Act
    const outputName = pokemon.name;
    const outputHitpoint = pokemon.hitPoints;
    const outputDamage = pokemon.attackDamage;

    const outputType = pokemon.type;
    const outputMove = pokemon.move;

    //Assert
    expect(outputName).toBe("Rattata");
    expect(outputHitpoint).toBe(55);
    expect(outputDamage).toBe(18);
    expect(outputMove).toBe("tackle");
    expect(outputType).toBe("Normal");
  });
});
