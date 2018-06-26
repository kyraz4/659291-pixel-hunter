// import {canContinue} from './screens/game-logic';
import {INITIAL_GAME} from './config';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
// import addDelegatedEventListener from './addDelegatedEventListener';
// import {gameHeader} from './screens/renderHeader';
// import {renderLevel} from './screens/renderLevel';
// import statsScreen from './screens/stats';
import {fillStats} from './fillStats';
import {GAME} from './game-content';
import GameHeader from './views/levelHeaderViews';
import {renderLevelOfType} from './screens/renderLevel.js';


const LEVELS_TYPES = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};

const CONSTANT_NULL = 0;
const CONSTANT_TWO = 2;
const CONSTANT_ONE = 1;

const gameContainerElement = getElementFromTeamplate();
const headerElement = getElementFromTeamplate();
const levelElement = getElementFromTeamplate();
gameContainerElement.appendChild(headerElement);
gameContainerElement.appendChild(levelElement);

const getLevel = (i) => GAME.levels[i];

export const updateGame = (state) => {
  updateView(headerElement, new GameHeader(state));
  const levelView = renderLevelOfType(getLevel(state.level));
  levelView.onAnswer = answerHendler;
  updateView(levelElement, levelView);
  let putFooterStats = levelElement.querySelector(`.stats`);
  putFooterStats.appendChild(fillStats(state.stats));
};

let initialContent;

// export const chooseEventListner = (game) => {
//   if (game.type === LEVELS_TYPES.DOUBLE) {
//     return addDelegatedEventListener(`change`, `.game__content`, (evt) => {
//       const firstQuestionChecked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
//       const secondQuestionChecked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
//       let currentAnsver = evt.path[0];
//       console.log(currentAnsver);
//       const answersArray = Array(CONSTANT_TWO);

//       console.log(answersArray);
//       if (firstQuestionChecked && secondQuestionChecked) {
//         console.log(answersArray);
//         initialContent.stats[initialContent.level] = `CORRECT`;
//         initialContent.level++;
//         chooseEventListner(GAME.levels[initialContent.level]);
//         updateGame(initialContent);
//         changeScreen(gameContainerElement);
//         console.log(initialContent);
//       }

//     });
//   } else if (game.type === LEVELS_TYPES.SINGLE) {
//     return addDelegatedEventListener(`change`, `.game__content--wide`, (evt) => {
//       const firstChoose = document.querySelector(`.game__content [value=photo]:checked`) !== null;
//       const secondtChoose = document.querySelector(`.game__content [value=paint]:checked`) !== null;
//       if ((firstChoose || secondtChoose) && (canContinue(initialContent))) {
//         const userAnsver = evt.path[CONSTANT_NULL].value;
//         if (userAnsver === game.answers.answerInputTrueValue) {
//           initialContent.stats[initialContent.level] = `CORRECT`;
//         } else if (userAnsver !== game.answers.answerInputTrueValue) {
//           initialContent.stats[initialContent.level] = `WRONG`;
//           initialContent.lives--;
//         }
//         initialContent.level++;
//         chooseEventListner(GAME.levels[initialContent.level]);
//         updateGame(initialContent);
//         changeScreen(gameContainerElement);
//         console.log(initialContent);
//       } else if (!canContinue(initialContent)) {
//         changeScreen(statsScreen(initialContent));
//       }
//     });
//   } else if (game.type === LEVELS_TYPES.TRIPLE) {
//     return addDelegatedEventListener(`click`, `.game__content--triple`, (evt) => {
//       const chooseClick = document.querySelectorAll(`.game__option`) !== null;
//       if ((chooseClick) && (canContinue(initialContent))) {
//         const userAnsver = evt.path[CONSTANT_NULL].children[CONSTANT_NULL].src;
//         if (userAnsver === game.answers.answerImageUrl) {
//           initialContent.stats[initialContent.level] = `CORRECT`;
//         } else if (userAnsver !== game.answers.answerImageUrl) {
//           initialContent.stats[initialContent.level] = `WRONG`;
//           initialContent.lives--;
//         }
//         initialContent.level++;
//         chooseEventListner(GAME.levels[initialContent.level]);
//         updateGame(initialContent);
//         changeScreen(gameContainerElement);
//         console.log(initialContent);
//       } else if (!canContinue(initialContent)) {
//         changeScreen(statsScreen(initialContent));
//       }
//     });
//   }
//   return 0;
// };

const updateView = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};


const answerHendler = (ansver, level) => {
  if (level.type === LEVELS_TYPES.SINGLE) {
    if (ansver === level.answers.answerInputTrueValue) {
      initialContent.stats[initialContent.level] = `CORRECT`;
    } else if (ansver !== level.answers.answerInputTrueValue) {
      initialContent.stats[initialContent.level] = `WRONG`;
      initialContent.lives--;
    }
    initialContent.level++;
    updateGame(initialContent);
    changeScreen(gameContainerElement);
  } else if (level.type === LEVELS_TYPES.DOUBLE) {
    initialContent.level++;
    updateGame(initialContent);
    changeScreen(gameContainerElement);
  } else if (level.type === LEVELS_TYPES.DOUBLE.TRIPLE) {
    if (ansver === level.answers.answerImageUrl) {
      initialContent.stats[initialContent.level] = `CORRECT`;
    } else if (ansver !== level.answers.answerImageUrl) {
      initialContent.stats[initialContent.level] = `WRONG`;
      initialContent.lives--;
    }
    initialContent.level++;
    updateGame(initialContent);
    changeScreen(gameContainerElement);
  }
};

const startGame = () => {
  initialContent = Object.assign({}, INITIAL_GAME);

  updateGame(initialContent);
  changeScreen(gameContainerElement);
};


startGame();

export default startGame;
