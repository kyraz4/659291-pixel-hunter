// возвращает игру в зависимости от типа
import {renderTypeOneGame} from './renderTypeOneGame';
import {renderTypeTwoGame} from './renderTypeTwoGame';
import {renderTypeThreeGame} from './renderTypeThreeGame';
export const renderLevel = (levelType, level) => {
  if (levelType.type === `1`) {
    return renderTypeOneGame(level);
  } else if (level.type === `2`) {
    return renderTypeTwoGame(level);
  } else if (level.type === `3`) {
    return renderTypeThreeGame(level);
  }
  return true;
};
