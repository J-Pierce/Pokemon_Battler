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

describe("Test makePokemon", () => {
  test("when not given a parameter, returns an object of all pokemon objects with their names as keys", () => {
    expect(makePokemon()).toEqual({
      Eevee: {
        name: "Eevee",
        hitPoints: 55,
        attackDamage: 18,
        move: "Headbutt",
        critChance: 0.2,
        critModifier: 3,
        type: "Normal",
      },
      Flareon: {
        name: "Flareon",
        hitPoints: 65,
        attackDamage: 20,
        move: "Fire blast",
        critChance: 0.2,
        critModifier: 3,
        type: "Fire",
      },
      Vaporeon: {
        name: "Vaporeon",
        hitPoints: 70,
        attackDamage: 19,
        move: "Hydro pump",
        critChance: 0.2,
        critModifier: 3,
        type: "Water",
      },
      Leafeon: {
        name: "Leafeon",
        hitPoints: 65,
        attackDamage: 17,
        move: "Giga drain",
        critChance: 0.2,
        critModifier: 3,
        type: "Grass",
      },
      Charmander: {
        name: "Charmander",
        hitPoints: 44,
        attackDamage: 17,
        move: "Flamethrower",
        critChance: 0.2,
        critModifier: 3,
        type: "Fire",
      },
      Squirtle: {
        name: "Squirtle",
        hitPoints: 44,
        attackDamage: 16,
        move: "Surf",
        critChance: 0.2,
        critModifier: 3,
        type: "Water",
      },
      Bulbasaur: {
        name: "Bulbasaur",
        hitPoints: 45,
        attackDamage: 16,
        move: "Razor leaf",
        critChance: 0.2,
        critModifier: 3,
        type: "Grass",
      },
      Rattata: {
        name: "Rattata",
        hitPoints: 30,
        attackDamage: 56,
        move: "Tackle",
        critChance: 0.2,
        critModifier: 3,
        type: "Normal",
      },
    });
  });
  test("when given a pokemon name as a parameter, returns that pokemon object", () => {
    expect(makePokemon("Squirtle")).toEqual({
      name: "Squirtle",
      hitPoints: 44,
      attackDamage: 16,
      move: "Surf",
      critChance: 0.2,
      critModifier: 3,
      type: "Water",
    });
  });
  test("when called a second time, returns a different object with different pokemon objects inside", () => {
    const listA = makePokemon();
    const listB = makePokemon();
    expect(listA).not.toBe(listB);
    expect(listA["Squirtle"]).not.toBe(listB["Squirtle"]);
  });
});
