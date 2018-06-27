import changeScreen from '../selectPage';
import GreetingsView from '../views/greetingsViews';
import createIntroFragment from '../screens/intro';
import createRulesScreenFragment from '../screens/rules';


const createGreetingScreenFragment = () => {
  const greetingView = new GreetingsView();
  greetingView.OnGreetingContiniueClick = () => changeScreen(createRulesScreenFragment());
  greetingView.OnHeaderBackClick = () => changeScreen(createIntroFragment());
  return greetingView.element;
};

export default createGreetingScreenFragment;
