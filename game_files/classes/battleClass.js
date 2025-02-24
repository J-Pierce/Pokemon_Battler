class Battle {
  constructor(difficulty, player, opponent) {
    this.difficulty = difficulty;
    this.player = player;
    this.opponent = opponent;
    this.playerPokemonFainted = 0;
    this.opponentPokemonFainted = 0;
  }

  attack(attacker, defender) {
    const attackerCritChance = attacker.critChance;
    const attackerCritModifier = attacker.critModifier;
    if (defender.isEffectiveAgainst(attacker)) {
      if (Math.random() < attackerCritChance) {
        defender.takeDamage(attacker.useMove() * 0.75 * attackerCritModifier);
        console.log(
          "\tDamage dealt: ",
          attacker.attackDamage * 0.75 * attackerCritModifier
        );
        console.log("\tCritical Hit!");
        console.log("\tIt's not very effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      } else {
        defender.takeDamage(attacker.useMove() * 0.75);
        console.log("\tDamage dealt: ", attacker.attackDamage * 0.75);
        console.log("\tIt's not very effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      }
    } else if (defender.isWeakTo(attacker)) {
      if (Math.random() < attackerCritChance) {
        defender.takeDamage(attacker.useMove() * 1.25 * attackerCritModifier);
        console.log(
          "\tDamage dealt: ",
          attacker.attackDamage * 1.25 * attackerCritModifier
        );
        console.log("\tCritical Hit!");
        console.log("\tIt's super effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      } else {
        defender.takeDamage(attacker.useMove() * 1.25);
        console.log("\tDamage dealt: ", attacker.attackDamage * 1.25);
        console.log("\tIt's super effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      }
    } else {
      if (Math.random() < attackerCritChance) {
        defender.takeDamage(attacker.useMove() * attackerCritModifier);
        console.log(
          "\tDamage dealt: ",
          attacker.attackDamage * attackerCritModifier
        );
        console.log("\tCritical Hit!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      } else {
        defender.takeDamage(attacker.useMove());
        console.log("\tDamage dealt: ", attacker.attackDamage);
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      }
    }
  }
}

module.exports = { Battle };
