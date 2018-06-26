// возвращает игру в зависимости от типа
import {renderTypeOneGame} from './renderTypeOneGame';
import {renderTypeTwoGame} from './renderTypeTwoGame';
import {renderTypeThreeGame} from './renderTypeThreeGame';
import GameOneView from '../views/levelTypeOneView';
import GameTwoView from '../views/levelTypeTwoViews';
import GameThreeView from '../views/levelThreeTypeViews';

export const renderLevel = (game) => {
  if (game.type === 1) {
    return renderTypeTwoGame(game);
  } else if (game.type === 2) {
    return renderTypeOneGame(game);
  } else if (game.type === 3) {
    return renderTypeThreeGame(game);
  }
  return true;
};

export const renderLevelOfType = (game) => {
  if (game.type === 1) {
    return new GameTwoView(game);
  } else if (game.type === 2) {
    return new GameOneView(game);
  } else if (game.type === 3) {
    return new GameThreeView(game);
  }
  return true;
};
