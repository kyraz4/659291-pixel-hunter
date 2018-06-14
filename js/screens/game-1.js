
import changeScreen from '../selectPage';
import greetingsScreen from './greetings';
import addDelegatedEventListener from '../addDelegatedEventListener';
import gameTwoScreen from './game-2';


// const gameOneScreenPrevious = (state) => `<header class="header">
// <div class="header__back">
//   <button class="back">
//     <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
//     <img src="img/logo_small.svg" width="101" height="44">
//   </button>
// </div>
// <h1 class="game__timer">${state.time}</h1>
// <div class="game__lives">
//   ${new Array(3 - state.lievs).
//     fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
//   ${new Array(state.lievs).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
// </div>
// </header>`;

// const gameOneHeaderScreen = getElementFromTeamplate(gameOneScreenPrevious(initialState));


// const gameOneScreenPrevious = (game) => `<div class="game">
// <p class="game__task">${typeOfGames.typeOne.description}</p>
// <form class="game__content">
//   <div class="game__option">
//     <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
//     <label class="game__answer game__answer--photo">
//        ${typeOfGames.typeOne.answers[1]}
//     </label>
//     <label class="game__answer game__answer--paint">
//        ${typeOfGames.typeOne.answers[2]}
//     </label>
//   </div>
//   <div class="game__option">
//     <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
//     <label class="game__answer  game__answer--photo">
//       ${typeOfGames.typeOne.answers[3]}
//     </label>
//     <label class="game__answer  game__answer--paint">
//       ${typeOfGames.typeOne.answers[4]}
//     </label>
//   </div>
// </form>
//   <div class="stats">
// </div>`

// const gameOneScreen = getElementFromTeamplate(``);

// const statsFooterGameOneScreenPrevious = (game) =>
//   `<div class="stats">
// <ul class="stats">
//    ${fillStats(game)}
// </ul>
// </div>`;


// const statsFooterGameOneScreen = getElementFromTeamplate(statsFooterGameOneScreenPrevious(initialGame));

addDelegatedEventListener(`click`, `.back`, () => changeScreen(greetingsScreen));
addDelegatedEventListener(`change`, `.game__content`, () => {
  const firstQuestionChecked = document.querySelector(`.game__content [name=question1]:checked`) !== null;
  const secondQuestionChecked = document.querySelector(`.game__content [name=question2]:checked`) !== null;
  if (firstQuestionChecked && secondQuestionChecked) {
    changeScreen(gameTwoScreen);
  }
});
// export default gameOneScreen;
