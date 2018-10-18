const rollDie = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

const rollDice = (sides, quantity) => {
  let total = 0;
  for (let i = 0; i < quantity; i++) {
    total += rollDie(sides)
  };
  return total;
};

export default rollDice;