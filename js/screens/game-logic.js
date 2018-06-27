// логика

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

export const endOfGame = (game) => game.level < 9;


// export const createInitialState = () => {
//   return {
//     lives: INITIAL_GAME.LIVES_COUNT,
//     time: INITIAL_GAME.SECONDS_COUNT_BY_QUESTION,
//     levels: GAME.levels,
//     stats: Array(INITIAL_GAME.GAMES_COUNT).fill(null),
//     currentLevelIndex: 0
//   };
// };

