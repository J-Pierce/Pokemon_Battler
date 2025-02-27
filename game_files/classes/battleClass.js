class Battle {
  constructor(difficulty, player, opponent) {
    this.difficulty = difficulty;
    this.player = player;
    this.opponent = opponent;
    this.playerPokemonFainted = 0;
    this.opponentPokemonFainted = 0;
  }

  attack(attacker, defender, attackerMove) {
    const attackerCritChance = attacker.critChance;
    const attackerCritModifier = attacker.critModifier;
    if (defender.isEffectiveAgainst(attacker)) {
      if (Math.random() < attackerCritChance) {
        const damage =
          attacker.useMove(attackerMove) * 0.75 * attackerCritModifier;
        defender.takeDamage(damage);
        console.log("\tDamage dealt: ", damage);
        console.log("\tCritical Hit!");
        console.log("\tIt's not very effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      } else {
        const damage = attacker.useMove(attackerMove) * 0.75;
        defender.takeDamage(damage);
        console.log("\tDamage dealt: ", damage);
        console.log("\tIt's not very effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      }
    } else if (defender.isWeakTo(attacker)) {
      if (Math.random() < attackerCritChance) {
        const damage =
          attacker.useMove(attackerMove) * 1.25 * attackerCritModifier;
        defender.takeDamage(damage);
        console.log("\tDamage dealt: ", damage);
        console.log("\tCritical Hit!");
        console.log("\tIt's super effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      } else {
        const damage = attacker.useMove(attackerMove) * 1.25;
        defender.takeDamage(damage);
        console.log("\tDamage dealt: ", damage);
        console.log("\tIt's super effective!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      }
    } else {
      if (Math.random() < attackerCritChance) {
        const damage = attacker.useMove(attackerMove) * attackerCritModifier;
        defender.takeDamage(damage);
        console.log(
          "\tDamage dealt: ",
          attacker.attackDamage * attackerCritModifier
        );
        console.log("\tCritical Hit!");
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      } else {
        const damage = attacker.useMove(attackerMove);
        defender.takeDamage(damage);
        console.log("\tDamage dealt: ", damage);
        console.log(`\t${defender.name}'s HP reduces to ${defender.hitPoints}`);
      }
    }
  }
}

module.exports = { Battle };
