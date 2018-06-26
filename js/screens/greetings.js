// import {getElementFromTeamplate} from '../elemFromTemplate';
// import addDelegatedEventListener from '../addDelegatedEventListener';
import changeScreen from '../selectPage';
// import rulesScreen from '../screens/rules';
import GreetingsView from '../views/greetingsViews';
import createIntroFragment from '../screens/intro';
import createRulesScreenFragment from '../screens/rules';

// const greetingsScreen = getElementFromTeamplate(`<div class="greeting central--blur">
// <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
// <h1 class="greeting__asterisk">*</h1>
// <div class="greeting__challenge">
//   <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
//   <p>Правила игры просты.<br>
//     Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
//     Задача кажется тривиальной, но не думай, что все так просто.<br>
//     Фотореализм обманчив и коварен.<br>
//     Помни, главное — смотреть очень внимательно.</p>
// </div>
// <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
// </div>`);
// addDelegatedEventListener(`click`, `.header__back`, () => changeScreen(greetingsScreen));
// addDelegatedEventListener(`click`, `.greeting__continue`, () => changeScreen(rulesScreen));
// export default greetingsScreen;

const createGreetingScreenFragment = () => {
  const greetingView = new GreetingsView();
  greetingView.OnGreetingContiniueClick = () => changeScreen(createRulesScreenFragment());
  greetingView.OnHeaderBackClick = () => changeScreen(createIntroFragment());
  return greetingView.element;
};

export default createGreetingScreenFragment;
