import {INITIAL_GAME} from './config';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
import {fillStats} from './fillStats';
import {GAME} from './game-content';
import GameHeader from './views/levelHeaderViews';
import {renderLevelOfType} from './screens/renderLevel.js';
import {canContinue, endOfGame} from './screens/game-logic';
import statsScreen from './screens/stats';
import {makeTimer} from './make-timer';

const ONE = 0;
const TWO = 1;

const LEVELS_TYPES = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};
let initialContent;
const ONE_SECOND = 1000;
initialContent = Object.assign({}, INITIAL_GAME);
const newTimer = makeTimer(initialContent.time);
newTimer.onTimeClick = (remainingTime) => console.log(remainingTime);

// const tick = () => {
//   initialContent = Object.assign({}, initialContent, {time: initialContent.time - 1});
//   updateHeader(initialContent);
//   console.log
// };

const startTimer = () => {
  setInterval(() => newTimer.tick(), ONE_SECOND);
};

const stopTimer = () => {
  clearTimeout(newTimer);
};

const updateHeader = (state) => {
  updateView(headerElement, new GameHeader(state));
};

const gameContainerElement = document.createElement(`div`);
const headerElement = getElementFromTeamplate();
const levelElement = getElementFromTeamplate();
gameContainerElement.appendChild(headerElement);
gameContainerElement.appendChild(levelElement);

export const getLevel = (i) => GAME.levels[i];

export const updateGame = (state) => {
  updateView(headerElement, new GameHeader(state));
  const levelView = renderLevelOfType(getLevel(state.level));
  updateView(levelElement, levelView);
  let putFooterStats = levelElement.querySelector(`.stats`);
  putFooterStats.appendChild(fillStats(state.stats));
  if (getLevel(state.level).type === LEVELS_TYPES.SINGLE) {
    levelView.onAnswer = answerHendlerTypeOne;
  } else if (getLevel(state.level).type === LEVELS_TYPES.DOUBLE) {
    levelView.onAnswer = answerHendlerTypeTwo;
  } else if (getLevel(state.level).type === LEVELS_TYPES.TRIPLE) {
    levelView.onAnswer = answerHendlerTypeThree;
  }

};
const updateView = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};


const answerHendlerTypeOne = (answer) => {
  const level = getLevel(initialContent.level);
  if (!endOfGame(initialContent)) {
    if (answer === level.answers.answerInputTrueValue) {
      initialContent.stats[initialContent.level] = `CORRECT`;
    } else if (answer !== level.answers.answerInputTrueValue) {
      initialContent.stats[initialContent.level] = `WRONG`;
      initialContent.lives--;
    }
    changeScreen(statsScreen(initialContent));
  } else
  if (canContinue(initialContent)) {
    if (answer === level.answers.answerInputTrueValue) {
      initialContent.stats[initialContent.level] = `CORRECT`;
      continueGame();
    } else if (answer !== level.answers.answerInputTrueValue) {
      initialContent.stats[initialContent.level] = `WRONG`;
      initialContent.lives--;
      continueGame();
    }
  } else if (!canContinue(initialContent)) {
    initialContent.stats[initialContent.level] = `WRONG`;
    changeScreen(statsScreen(initialContent));
  }

};

const answerHendlerTypeTwo = (answer) => {
  const level = getLevel(initialContent.level);
  if ((answer[ONE].value === level.answers.answerInputTrueValue[ONE]) && (answer[TWO].value === level.answers.answerInputTrueValue[TWO])) {
    initialContent.stats[initialContent.level] = `CORRECT`;
    continueGame();
  } else {
    initialContent.stats[initialContent.level] = `WRONG`;
    initialContent.lives--;
    continueGame();
  }
};

const answerHendlerTypeThree = (answer) => {
  const level = getLevel(initialContent.level);
  if (canContinue(initialContent)) {
    if (answer === level.answers.answerImageUrl) {
      initialContent.stats[initialContent.level] = `CORRECT`;
      continueGame();
    } else if (answer !== level.answers.answerImageUrl) {
      initialContent.stats[initialContent.level] = `WRONG`;
      initialContent.lives--;
      continueGame();
    }
  } else if (!canContinue(initialContent)) {
    initialContent.stats[initialContent.level] = `WRONG`;
    changeScreen(statsScreen(initialContent));
  }
};

const continueGame = () => {
  initialContent.level++;
  updateGame(initialContent);
  changeScreen(gameContainerElement);
};

const startGame = () => {
  initialContent = Object.assign({}, INITIAL_GAME);

  updateGame(initialContent);
  changeScreen(gameContainerElement);
// startTimer();
};


startGame();

export default startGame;
