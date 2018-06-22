import {changeLevel, canContinue, fail} from './screens/game-logic';
import {INITIAL_GAME} from './config';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
import addDelegatedEventListener from './addDelegatedEventListener';
import {gameHeader} from './screens/renderHeader';
import {renderLevel} from './screens/renderLevel';
import statsScreen from './screens/stats';
import {fillStats} from './fillStats';
import {GAME} from './game-content';

const LEVELS_TYPES = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};

const gameContainerElement = getElementFromTeamplate();
const headerElement = getElementFromTeamplate();
const levelElement = getElementFromTeamplate();
gameContainerElement.appendChild(headerElement);
gameContainerElement.appendChild(levelElement);

const getLevel = (i) => GAME.levels[i];

export const updateGame = (state) => {
  headerElement.innerHTML = gameHeader(state);
  levelElement.innerHTML = renderLevel(getLevel(state.level));
  let putFooterStats = levelElement.querySelector(`.stats`);
  putFooterStats.appendChild(fillStats(state.stats));
};

let initialContent;

const chooseEventListner = (game) => {
  if (game.type === LEVELS_TYPES.DOUBLE) {
    return addDelegatedEventListener(`change`, `.game__content`, () => {
      const firstQuestionChecked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
      const secondQuestionChecked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
      if (firstQuestionChecked && secondQuestionChecked) {
        if (initialContent.level !== 9) {
          initialContent.stats[initialContent.level] = `CORRECT`;
          initialContent.level++;
          chooseEventListner(GAME.levels[initialContent.level]);
          updateGame(initialContent);
          changeScreen(gameContainerElement);
          console.log(initialContent);
        } else {
          changeScreen(statsScreen);
        }
        // if ((userAnsver[1] === game.levels[initialContent.level].ansvers.isCorrect[1]) && (userAnsver[2] === game.levels[initialContent.level].ansvers.isCorrect[2])) {
        //   const nextLevel = GAME.levels[initialContent.level + 1];
        //   try {
        //     game = changeLevel(game, nextLevel);
        //   } catch (e) {
        //     game = fail(game);
        //   }
        //   updateGame(game);
        //   if (!canContinue(game)) {
        //     changeScreen(statsScreen);
      }
    });
  } else if (game.type === LEVELS_TYPES.SINGLE) {
    return addDelegatedEventListener(`change`, `.game__content--wide`, () => {
      const firstChoose = document.querySelector(`.game__content [value=photo]:checked`) !== null;
      const secondtChoose = document.querySelector(`.game__content [value=paint]:checked`) !== null;
      if (firstChoose || secondtChoose) {
        // const userAnsver = [firstChoose, secondtChoose];
        // if ((userAnsver[1] === game.answers.isCorrect) || (userAnsver[2] === game.answers.isCorrect)) {
        if (initialContent.level !== 9) {
          initialContent.stats[initialContent.level] = `CORRECT`;
          initialContent.level++;
          chooseEventListner(GAME.levels[initialContent.level]);
          updateGame(initialContent);
          changeScreen(gameContainerElement);
          console.log(initialContent);
        } else {
          changeScreen(statsScreen);
        }
        // try {
        //   game = changeLevel(game, nextLevel);
        // } catch (e) {
        //   game = fail(game);
        // }
        // updateGame(initialContent, statsObject);
        // if (!canContinue(game)) {
        //   changeScreen(statsScreen);
        // }

      }
    });
  } else if (game.type === LEVELS_TYPES.TRIPLE) {
    return addDelegatedEventListener(`click`, `.game__content--triple`, () => {
      const chooseClick = document.querySelectorAll(`.game__option`) !== null;
      const userChooseAnsver = document.querySelectorAll(`.game__option img`);
      console.log(userChooseAnsver);
      const UserChooseOne = userChooseAnsver[0];
      const UserChooseTwo = userChooseAnsver[1];
      const UserChooseThree = userChooseAnsver[2];
      UserChooseOne.onClick = () => {
        console.log(`Click first`);
      };
      UserChooseTwo.onClick = () => {
        console.log(`Click second`);
      };
      UserChooseThree.onClick = () => {
        console.log(`Click third`);
      };

      if (chooseClick) {

        if (initialContent.level !== 9) {
          //     let userAnsver = Array(3).fill(null);
          // addDelegatedEventListener(`click`, `.game__content--triple .photo-one`, () => {
          //   userAnsver[0] = `click`;
          //   console.log(`click`);
          // });
          // addDelegatedEventListener(`click`, `.game__content--triple .photo-two`, () => {
          //   userAnsver[1] = `click`;
          //   console.log(`click`);
          // });
          // addDelegatedEventListener(`click`, `.game__content--triple .photo-three`, () => {
          //   userAnsver[2] = `click`;
          //   console.log(`click`);
          // });
          // console.log(userAnsver);
          initialContent.stats[initialContent.level] = `CORRECT`;
          initialContent.level++;
          chooseEventListner(GAME.levels[initialContent.level]);
          updateGame(initialContent);
          changeScreen(gameContainerElement);
          console.log(initialContent);
        } else {
          changeScreen(statsScreen);
        }
      }
    });
  }
  return 0;
};
const startGame = () => {
  initialContent = Object.assign({}, INITIAL_GAME);

  chooseEventListner(GAME.levels[initialContent.level]);
  updateGame(initialContent);
  changeScreen(gameContainerElement);
};


startGame();

export default startGame;
