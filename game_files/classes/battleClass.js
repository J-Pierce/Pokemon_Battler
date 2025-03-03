const Spinner = require("cli-spinner").Spinner;
const { sleep } = require("../functions/spinner");
class Battle {
  constructor(difficulty, player, opponent) {
    this.difficulty = difficulty;
    this.player = player;
    this.opponent = opponent;
    this.playerPokemonFainted = 0;
    this.opponentPokemonFainted = 0;
  }

  async attack(attacker, defender, attackerMove) {
    try {
      if (attackerMove !== "Struggle") {
        const attackerCritChance = attacker.critChance;
        const attackerCritModifier = attacker.critModifier;
        if (defender.isEffectiveAgainst(attacker)) {
          if (Math.random() < attackerCritChance) {
            const spinner = new Spinner(
              `${attacker.name} is choosing their move.. %s`
            );
            spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
            spinner.start();
            await sleep(Math.random() * 1000 + 1000);
            spinner.stop(true);
            let damage =
              attacker.useMove(attackerMove) * 0.75 * attackerCritModifier;
            damage = damage.toFixed(2);
            defender.takeDamage(damage);
            console.log("\tDamage dealt: ", damage);
            console.log("\tCritical Hit!");
            console.log("\tIt's not very effective!");
            console.log(
              `\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`
            );
          } else {
            const spinner = new Spinner(
              `${attacker.name} is choosing their move.. %s`
            );
            spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
            spinner.start();
            await sleep(Math.random() * 1000 + 1000);
            spinner.stop(true);
            let damage = attacker.useMove(attackerMove) * 0.75;
            damage = damage.toFixed(2);
            defender.takeDamage(damage);
            console.log("\tDamage dealt: ", damage);
            console.log("\tIt's not very effective!");
            console.log(
              `\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`
            );
          }
        } else if (defender.isWeakTo(attacker)) {
          if (Math.random() < attackerCritChance) {
            const spinner = new Spinner(
              `${attacker.name} is choosing their move.. %s`
            );
            spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
            spinner.start();
            await sleep(Math.random() * 1000 + 1000);
            spinner.stop(true);
            let damage =
              attacker.useMove(attackerMove) * 1.25 * attackerCritModifier;
            damage = damage.toFixed(2);
            defender.takeDamage(damage);
            console.log("\tDamage dealt: ", damage);
            console.log("\tCritical Hit!");
            console.log("\tIt's super effective!");
            console.log(
              `\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`
            );
          } else {
            const spinner = new Spinner(
              `${attacker.name} is choosing their move.. %s`
            );
            spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
            spinner.start();
            await sleep(Math.random() * 1000 + 1000);
            spinner.stop(true);
            let damage = attacker.useMove(attackerMove) * 1.25;
            damage = damage.toFixed(2);
            defender.takeDamage(damage);
            console.log("\tDamage dealt: ", damage);
            console.log("\tIt's super effective!");
            console.log(
              `\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`
            );
          }
        } else {
          if (Math.random() < attackerCritChance) {
            const spinner = new Spinner(
              `${attacker.name} is choosing their move.. %s`
            );
            spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
            spinner.start();
            await sleep(Math.random() * 1000 + 1000);
            spinner.stop(true);
            let damage = attacker.useMove(attackerMove) * attackerCritModifier;
            damage = damage.toFixed(2);
            defender.takeDamage(damage);
            console.log(
              "\tDamage dealt: ",
              attacker.attackDamage * attackerCritModifier
            );
            console.log("\tCritical Hit!");
            console.log(
              `\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`
            );
          } else {
            const spinner = new Spinner(
              `${attacker.name} is choosing their move.. %s`
            );
            spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
            spinner.start();
            await sleep(Math.random() * 1000 + 1000);
            spinner.stop(true);
            let damage = attacker.useMove(attackerMove);
            damage = damage.toFixed(2);
            defender.takeDamage(damage);
            console.log("\tDamage dealt: ", damage);
            console.log(
              `\t${defender.name}'s HP reduces to ${defender.hitPoints}\n`
            );
          }
        }
      } else {
        const spinner = new Spinner(
          `${attacker.name} is choosing their move.. %s`
        );
        spinner.setSpinnerString("⢹⢺⢼⣸⣇⡧⡗⡏");
        spinner.start();
        await sleep(Math.random() * 1000 + 1000);
        spinner.stop(true);
        let damage = attacker.useMove(attackerMove);
        damage = damage.toFixed(2);
        attacker.takeDamage(damage);
        console.log("\tDamage dealt: ", damage);
        console.log(
          `\t${attacker.name}'s HP reduces to ${attacker.hitPoints}\n`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { Battle };
