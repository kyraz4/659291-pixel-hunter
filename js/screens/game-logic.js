export const INITIAL_GAME = {
  level: 0,
  lives: 3,
  time: 30,
  stats: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

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

export const fail = (game) => {
  if (!canContinue(game)) {
    throw new Error(`You lose game`);
  }

  const lives = game.lives - 1;

  return Object.assign({}, game, {lives});
};
