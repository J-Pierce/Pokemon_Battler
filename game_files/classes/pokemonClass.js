class Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
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
