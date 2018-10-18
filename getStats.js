export default function getStats(sample) {
  let blowsLanded = 0;
  let blowsBlocked = 0;
  let result;
  for (let i = 0; i < sample; i++) {
    const result = battle.takeTurn(hero, monster);
    switch (result) {
      case result[0] > result[1]:
      blowsLanded++;
      break;
      case result[1] > result[0]:
      blowsBlocked++;
      break;
      default:
      null;
    }
  };
  console.log(`hero: ${blowsLanded} monster: ${blowsBlocked}`);
};
