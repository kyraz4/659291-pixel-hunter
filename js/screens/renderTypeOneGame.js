export const renderTypeOneGame = (game) => `<div class="game">
<p class="game__task">${game.description}</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
       ${game.answers[1]}
    </label>
    <label class="game__answer game__answer--paint">
       ${game.answers[2]}
    </label>
  </div>
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      ${game.answers[3]}
    </label>
    <label class="game__answer  game__answer--paint">
      ${game.answers[4]}
    </label>
  </div>
</form>
<div class="stats">
</div>
</div>`;
