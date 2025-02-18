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

describe("Test class - Battle", () => {
  describe("Create new class - Battle", () => {
    test("Instance of class battle", () => {
      //Arrange
      // Trainer 1
      const pokemon1 = pokemonList["Charmander"];
      const trainer1 = new Trainer(pokemon1);

      // Trainer 2
      const pokemon2 = pokemonList["Squirtle"];
      const trainer2 = new Trainer(pokemon2);
      //Act

      const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle");
      const output = battle instanceof Battle;

      //Assert
      expect(output).toBe(true);
    });
    test("Create a class Battle with correct properties", () => {
      //Arrange
      // Trainer 1
      const pokemon1 = pokemonList["Charmander"];
      const trainer1 = new Trainer(pokemon1);

      // Trainer 2
      const pokemon2 = pokemonList["Squirtle"];
      const trainer2 = new Trainer(pokemon2);
      //Act

      const output = new Battle(trainer1, "Charmander", trainer2, "Squirtle");

      //Assert
      expect(output.trainer1).toBe(trainer1);
      expect(output.pokemon1.name).toBe("Charmander");
      expect(output.trainer2).toBe(trainer2);
      expect(output.pokemon2.name).toBe("Squirtle");
    });
  });
  describe("Check methods of Battle", () => {
    beforeEach(() => {
      // Trainer 1
      pokemon1 = pokemonList["Charmander"];
      trainer1 = new Trainer(pokemon1);

      // Trainer 2
      pokemon2 = pokemonList["Squirtle"];
      trainer2 = new Trainer(pokemon2);
    });

    test("First attack in fight", () => {
      //Act

      const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle");
      battle.attack(battle.pokemon1, battle.pokemon2);

      //Assert
      expect(battle.pokemon2.hitPoints).toBe(31.25);
    });

    test("Stop battle when a pokemon has fainted", () => {
      //Act

      const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle");
      battle.fight();

      //Assert
      expect(battle.pokemon1.hasFainted()).toBe(true);
      expect(battle.pokemon2.hasFainted()).toBe(false);
    });

    xtest("Console log statement for winning battle", () => {
      //Act

      const battle = new Battle(trainer1, "Charmander", trainer2, "Squirtle");
      battle.fight();

      //Assert
      expect(consolespy).toHaveBeenCalledWith(
        "Charmander has fainted, Squirtle has won the battle!"
      );
    });
  });
});
