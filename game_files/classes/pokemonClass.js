class Pokemon {
  constructor(
    name,
    hitPoints,
    attackDamage,
    move,
    speed,
    critChance,
    critModifier
  ) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
    this.speed = speed;
    this.critChance = critChance;
    this.critModifier = critModifier;
  }
  takeDamage(damage) {
    if (this.hitPoints - damage > 0) {
      this.hitPoints -= damage;
    } else this.hitPoints = 0;
  }
  useMove() {
    console.log(`\n\t${this.name} used ${this.move}`);
    return this.attackDamage;
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
