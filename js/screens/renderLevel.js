import TypeOneView from '../views/TypeOneView';
import TypeTwoView from '../views/TypeTwoViews';
import TypeThreeView from '../views/TypeThreeViews';

const LEVELS_TYPES = {
  SINGLE: `tinder-like`,
  DOUBLE: `two-of-two`,
  TRIPLE: `one-of-three`
};


export const renderLevelOfType = (game, model) => {
  if (game.type === LEVELS_TYPES.SINGLE) {
    return new TypeOneView(game, model);
  } else if (game.type === LEVELS_TYPES.DOUBLE) {
    return new TypeTwoView(game, model);
  } else if (game.type === LEVELS_TYPES.TRIPLE) {
    return new TypeThreeView(game, model);
  }
  return true;
};
