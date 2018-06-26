
// import {getElementFromTeamplate} from '../elemFromTemplate';
// import addDelegatedEventListener from '../addDelegatedEventListener';
import startGame from '../new-game';
import GameRules from '../views/rulesView';
// const rulesScreen = getElementFromTeamplate(`<header class="header">
// <div class="header__back">
//   <button class="back">
//     <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
//     <img src="img/logo_small.svg" width="101" height="44">
//   </button>
// </div>
// </header>
// <div class="rules">
// <h1 class="rules__title">Правила</h1>
// <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
//   src="img/photo_icon.png" width="16" height="16"> или рисунок <img
//   src="img/paint_icon.png" width="16" height="16" alt="">.<br>
//   Фотографиями или рисунками могут быть оба изображения.<br>
//   На каждую попытку отводится 30 секунд.<br>
//   Ошибиться можно не более 3 раз.<br>
//   <br>
//   Готовы?
// </p>
// <form class="rules__form">
//   <input class="rules__input" type="text" placeholder="Ваше Имя" value="">
//   <button class="rules__button  continue" type="submit" disabled>Go!</button>
// </form>
// </div>`);
// addDelegatedEventListener(`input`, `.rules__input`, (evt) => {
//   const goButton = document.querySelector(`.rules__button`);
//   goButton.disabled = evt.target.value === ``;
// });

// addDelegatedEventListener(`submit`, `.rules__form`, () => startGame());
// export default rulesScreen;

const createGreetingScreenFragment = () => {
  const rulesView = new GameRules();
  rulesView.OnRulesFormClick = () => startGame();

  return rulesView.element;
};

export default createGreetingScreenFragment;
