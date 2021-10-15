class Fighter {
  constructor(name, health, damagePerAttack) {
    (this.name = name),
      (this.health = health),
      (this.damagePerAttack = damagePerAttack);
  }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let i;
  if (fighter1.name === firstAttacker) i = true;
  else i = false;

  while (fighter1.health > 0 && fighter2.health > 0) {
    if (i) {
      fighter2.health -= fighter1.damagePerAttack;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
    }

    i = !i;
  }

  if (fighter1.health > 0) return fighter1.name;
  else return fighter2.name;
}

console.log(
  declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
);
