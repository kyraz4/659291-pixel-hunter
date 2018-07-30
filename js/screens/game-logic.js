export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  return Object.assign({}, game, {level});
};

export const canContinue = (game) => game.lives - 1 > 0;

export const endOfGame = (state) => state.level === 9;

