import rollDice from "./dice";

export const heroStats = {
  name: "Link",
  health: rollDice(6, 1),
  attack: rollDice(6, 1),
  defend: rollDice(6, 1),
  stamina: rollDice(6, 1),
  speed: rollDice(6, 1)
};

export const monsterStats = {
  name: "Ganon",
  health: rollDice(6, 1),
  attack: rollDice(6, 1),
  defend: rollDice(6, 1),
  stamina: rollDice(6, 1),
  speed: rollDice(6, 1)
};