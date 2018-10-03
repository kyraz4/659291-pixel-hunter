import TypeOneView from '../views/typeOneView';
import TypeTwoView from '../views/typeTwoView';
import TypeThreeView from '../views/typeThreeView';

const LevelType = {
  SINGLE: `tinder-like`,
  DOUBLE: `two-of-two`,
  TRIPLE: `one-of-three`
};

export const renderLevelOfType = (game, model) => {
  switch (game.type) {
    case LevelType.SINGLE :
      return new TypeOneView(game, model);
    case LevelType.DOUBLE :
      return new TypeTwoView(game, model);
    case LevelType.TRIPLE :
      return new TypeThreeView(game, model);
  }
  return 0;
};
