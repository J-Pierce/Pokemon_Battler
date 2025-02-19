class Battle {
  constructor(trainer1, choice1, trainer2, choice2) {
    this.trainer1 = trainer1;
    this.pokemon1 = trainer1.getPokemon(choice1);
    this.trainer2 = trainer2;
    this.pokemon2 = trainer2.getPokemon(choice2);
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

  fight() {
    let winner;
    let loser;
    console.log(
      `\n${this.pokemon1.name}'s starting HP: ${this.pokemon1.hitPoints}`
    );
    console.log(
      `${this.pokemon2.name}'s starting HP: ${this.pokemon2.hitPoints}`
    );

    while (!this.pokemon1.hasFainted() && !this.pokemon2.hasFainted()) {
      console.log("\n\nNew Round!:");
      this.attack(this.pokemon1, this.pokemon2);

      if (!this.pokemon1.hasFainted() && !this.pokemon2.hasFainted()) {
        this.attack(this.pokemon2, this.pokemon1);
      }
    }
    if (this.pokemon1.hasFainted() && !this.pokemon2.hasFainted()) {
      console.log(
        `\n\n${this.pokemon1.name} has fainted, ${this.pokemon2.name} has won the battle!\n\n`
      );
    }
    if (!this.pokemon1.hasFainted() && this.pokemon2.hasFainted()) {
      console.log(
        `\n\n${this.pokemon2.name} has fainted, ${this.pokemon1.name} has won the battle!\n\n`
      );
    }
  }
}

module.exports = { Battle };
