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
const {
  opponentBelt,
  opponentFightChoice,
} = require("../functions/opponentChoices");

describe("Test opponentBelt", () => {
  let player;
  beforeEach(() => {
    player = new Trainer(
      makePokemon("Flareon"),
      makePokemon("Vaporeon"),
      makePokemon("Leafeon"),
      makePokemon("Charmander"),
      makePokemon("Squirtle"),
      makePokemon("Bulbasaur"),
      "testPlayer"
    );
  });
  test("when passed a player and difficulty being 'Easy', return opponent with a belt of pokemon weak to player pokemon", () => {
    const opponent = opponentBelt("Easy", player);
    expect(opponent.belt[1].pokemonInside.name).toBe("Leafeon");
    expect(opponent.belt[2].pokemonInside.name).toBe("Flareon");
    expect(opponent.belt[3].pokemonInside.name).toBe("Vaporeon");
    expect(opponent.belt[4].pokemonInside.name).toBe("Bulbasaur");
    expect(opponent.belt[5].pokemonInside.name).toBe("Charmander");
    expect(opponent.belt[6].pokemonInside.name).toBe("Squirtle");
  });
  test("when passed a player and difficulty is 'Easy', return opponent with a belt of pokemon that are not the same object player pokemon", () => {
    const opponent = opponentBelt("Easy", player);

    // Flareon
    expect(opponent.belt[2].pokemonInside.name).toBe(
      player.belt[1].pokemonInside.name
    );
    expect(opponent.belt[2].pokemonInside).not.toBe(
      player.belt[1].pokemonInside
    );

    // Vaporeon
    expect(opponent.belt[3].pokemonInside.name).toBe(
      player.belt[2].pokemonInside.name
    );
    expect(opponent.belt[3].pokemonInside).not.toBe(
      player.belt[2].pokemonInside
    );

    // Leafeon
    expect(opponent.belt[1].pokemonInside.name).toBe(
      player.belt[3].pokemonInside.name
    );
    expect(opponent.belt[1].pokemonInside).not.toBe(
      player.belt[3].pokemonInside
    );

    // Charmander
    expect(opponent.belt[5].pokemonInside.name).toBe(
      player.belt[4].pokemonInside.name
    );
    expect(opponent.belt[5].pokemonInside).not.toBe(
      player.belt[4].pokemonInside
    );

    // Squirtle
    expect(opponent.belt[6].pokemonInside.name).toBe(
      player.belt[5].pokemonInside.name
    );
    expect(opponent.belt[6].pokemonInside).not.toBe(
      player.belt[5].pokemonInside
    );

    // Bulbasaur
    expect(opponent.belt[4].pokemonInside.name).toBe(
      player.belt[6].pokemonInside.name
    );
    expect(opponent.belt[4].pokemonInside).not.toBe(
      player.belt[6].pokemonInside
    );
  });
  test("when passed a player and difficulty being 'Hard', return opponent with a belt of pokemon strong against player pokemon", () => {
    const opponent = opponentBelt("Hard", player);
    expect(opponent.belt[1].pokemonInside.name).toBe("Vaporeon");
    expect(opponent.belt[2].pokemonInside.name).toBe("Leafeon");
    expect(opponent.belt[3].pokemonInside.name).toBe("Flareon");
    expect(opponent.belt[4].pokemonInside.name).toBe("Squirtle");
    expect(opponent.belt[5].pokemonInside.name).toBe("Bulbasaur");
    expect(opponent.belt[6].pokemonInside.name).toBe("Charmander");
  });
  test("when passed a player and difficulty is 'Hard', return opponent with a belt of pokemon that are not the same object player pokemon", () => {
    const opponent = opponentBelt("Hard", player);

    // Flareon
    expect(opponent.belt[3].pokemonInside.name).toBe(
      player.belt[1].pokemonInside.name
    );
    expect(opponent.belt[3].pokemonInside).not.toBe(
      player.belt[1].pokemonInside
    );

    // Vaporeon
    expect(opponent.belt[1].pokemonInside.name).toBe(
      player.belt[2].pokemonInside.name
    );
    expect(opponent.belt[1].pokemonInside).not.toBe(
      player.belt[2].pokemonInside
    );

    // Leafeon
    expect(opponent.belt[2].pokemonInside.name).toBe(
      player.belt[3].pokemonInside.name
    );
    expect(opponent.belt[2].pokemonInside).not.toBe(
      player.belt[3].pokemonInside
    );

    // Charmander
    expect(opponent.belt[6].pokemonInside.name).toBe(
      player.belt[4].pokemonInside.name
    );
    expect(opponent.belt[6].pokemonInside).not.toBe(
      player.belt[4].pokemonInside
    );

    // Squirle
    expect(opponent.belt[4].pokemonInside.name).toBe(
      player.belt[5].pokemonInside.name
    );
    expect(opponent.belt[4].pokemonInside).not.toBe(
      player.belt[5].pokemonInside
    );

    // Bulbasaur
    expect(opponent.belt[5].pokemonInside.name).toBe(
      player.belt[6].pokemonInside.name
    );
    expect(opponent.belt[5].pokemonInside).not.toBe(
      player.belt[6].pokemonInside
    );
  });
});

describe.only("Test opponentBelt", () => {
  let player;
  beforeEach(() => {
    player = new Trainer(
      makePokemon("Flareon"),
      makePokemon("Vaporeon"),
      makePokemon("Leafeon"),
      makePokemon("Charmander"),
      makePokemon("Squirtle"),
      makePokemon("Bulbasaur"),
      "testPlayer"
    );
  });
  test("when passed a player pokemon and difficulty being 'Easy', return opponent pokemon which is weak to the player pokemon", () => {
    const difficulty = "Easy";
    const opponent = opponentBelt("Easy", player);
    const playerChoice = "Squirtle";

    const opponentChoice = opponentFightChoice(
      difficulty,
      opponent.belt,
      playerChoice
    );

    expect(
      makePokemon(opponentChoice).isWeakTo(makePokemon(playerChoice))
    ).toBe(true);
  });
  test("when passed a player pokemon and difficulty being 'Hard', return opponent pokemon which is effective against the player pokemon", () => {
    const difficulty = "Hard";
    const opponent = opponentBelt("Easy", player);
    const playerChoice = "Squirtle";

    const opponentChoice = opponentFightChoice(
      difficulty,
      opponent.belt,
      playerChoice
    );

    expect(
      makePokemon(opponentChoice).isEffectiveAgainst(makePokemon(playerChoice))
    ).toBe(true);
  });
});
