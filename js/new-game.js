// модуль в котором всё склеивается возвращает функцию startGame() (она вызовется после странички rules в обработчике событий)
import {changeLevel, canContinue, fail} from './screens/game-logic';
import {INITIAL_GAME} from './config';
import changeScreen from './selectPage';
import {getElementFromTeamplate} from './elemFromTemplate';
import addDelegatedEventListener from './addDelegatedEventListener';
// import GAME from './screens/data-game';
import {gameHeader} from './screens/renderHeader';
import {renderLevel} from './screens/renderLevel';
import statsScreen from './screens/stats';
import {fillStats} from './fillStats';
import {GAME} from './game-content';

const createInitialState = () => {
  return {
    lives: INITIAL_GAME.lives,
    time: INITIAL_GAME.time,
    levels: GAME.levels,
    stats: Array(INITIAL_GAME.GAMES_COUNT).fill(null),
    currentLevelIndex: 0
  };
};


let initialContent;
const startGame = () => {
  initialContent = Object.assign({}, INITIAL_GAME);

  const gameContainerElement = getElementFromTeamplate();
  const headerElement = getElementFromTeamplate();
  const levelElement = getElementFromTeamplate();
  const footerStatistic = getElementFromTeamplate();
  const putFooterStats = document.querySelector(`#stats`);

  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);
  putFooterStats.appendChild(footerStatistic);
  let statsObject = createInitialState();
  const getLevel = () => GAME.levels[initialContent.level];
  const updateGame = (state, statsObj) => {
    headerElement.innerHTML = gameHeader(state);
    levelElement.innerHTML = renderLevel(getLevel(state.level));
    footerStatistic.innerHTML = fillStats(statsObj.stats);
  };

  const chooseEventListner = (game) => {
    if (game.type === 2) {
      return addDelegatedEventListener(`change`, `.game__content--wide`, () => {
        const firstChoose = document.querySelector(`.game__content [value=photo]:checked`) !== null;
        const secondtChoose = document.querySelector(`.game__content [value=paint]:checked`) !== null;
        if (firstChoose || secondtChoose) {
          const userAnsver = [firstChoose, secondtChoose];
          if ((userAnsver[1] === game.levels[initialContent.level].ansvers.isCorrect[1]) && (userAnsver[2] === game.levels[initialContent.level].ansvers.isCorrect[2])) {
            const nextLevel = GAME.levels[initialContent.level + 1];
            try {
              game = changeLevel(game, nextLevel);
            } catch (e) {
              game = fail(game);
            }
            updateGame(game);
            if (!canContinue(game)) {
              changeScreen(statsScreen);
            }
          }
        }
      });
    } else if (game.type === 1) {
      return addDelegatedEventListener(`change`, `.game__content--wide`, () => {
        const firstChoose = document.querySelector(`.game__content [value=photo]:checked`) !== null;
        const secondtChoose = document.querySelector(`.game__content [value=paint]:checked`) !== null;
        if (firstChoose || secondtChoose) {
          const userAnsver = [firstChoose, secondtChoose];
          if ((userAnsver[1] === game.levels[initialContent.level].ansvers.isCorrect[1]) || (userAnsver[2] === game.levels[initialContent.level].ansvers.isCorrect[2])) {
            const nextLevel = GAME.levels[initialContent.level + 1];
            try {
              game = changeLevel(game, nextLevel);
            } catch (e) {
              game = fail(game);
            }
            updateGame(game);
            if (!canContinue(game)) {
              changeScreen(statsScreen);
            }
          }
        }
      });
    }
    return 0;
  };
  chooseEventListner(initialContent);
  updateGame(initialContent, statsObject);
  changeScreen(gameContainerElement);

};


startGame();

export default startGame;
