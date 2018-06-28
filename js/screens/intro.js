
import changeScreen from '../selectPage';

import GameIntro from '../views/introViews';
import createGreetingScreenFragment from '../screens/greetings';

const createIntroFragment = () => {
  const introView = new GameIntro();
  introView.onAsteriskClick = () => changeScreen(createGreetingScreenFragment());
  return introView.element;

};

export default createIntroFragment;
