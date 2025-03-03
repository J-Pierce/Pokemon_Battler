class Pokemon {
  constructor(
    name,
    hitPoints,
    attackDamage,
    moves,
    speed,
    critChance,
    critModifier
  ) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.moves = moves;
    this.speed = speed;
    this.critChance = critChance;
    this.critModifier = critModifier;
  }
  takeDamage(damage) {
    if (this.hitPoints - damage > 0) {
      this.hitPoints -= damage;
      this.hitPoints = this.hitPoints.toFixed(2);
    } else this.hitPoints = 0;
  }
  useMove(move) {
    if (move === "Struggle") {
      console.log(`\t${this.name} used ${move} ... They hurt themselves`);
      return this.attackDamage * this.moves[move].damageModifier;
    }
    if (this.moves[move].powerPoints > 0) {
      console.log(`\t${this.name} used ${move}`);
      this.moves[move].powerPoints--;
      return this.attackDamage * this.moves[move].damageModifier;
    } else {
      console.log(`${move} has now power points left ... choose another move!`);
    }
  }
  hasFainted() {
    if (this.hitPoints > 0) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = { Pokemon };
