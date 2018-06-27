
import startGame from '../new-game';
import GameRules from '../views/rulesView';

const createGreetingScreenFragment = () => {
  const rulesView = new GameRules();
  rulesView.OnRulesFormClick = () => startGame();

  return rulesView.element;
};

export default createGreetingScreenFragment;
