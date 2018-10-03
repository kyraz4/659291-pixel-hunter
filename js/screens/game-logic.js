export const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  return Object.assign({}, game, {level});
};
const NINE = 9;
export const canContinue = (game) => game.lives - 1 > 0;

export const endOfGame = (state) => state.level === NINE;

const CONSTANT_ONE = 1;
const CONSTANT_TWO = 2;
const CONSTANT_THREE = 3;


export const getAnswerNumber = (answer) => {
  switch (answer) {
    case `photo-one` :
      return CONSTANT_ONE;
    case `photo-two` :
      return CONSTANT_TWO;
    case `photo-three` :
      return CONSTANT_THREE;
  }
  return 0;
};
