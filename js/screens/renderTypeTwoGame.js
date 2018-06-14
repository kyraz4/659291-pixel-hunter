// рендерит игру третьего типа
export const renderTypeTwoGame = (game) => `<div class="game">
<p class="game__task">${game.description}</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      ${game.answers[1]}
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      ${game.answers[2]}
    </label>
  </div>
  </form>
<div class="stats">
</div>
  </div>`;
