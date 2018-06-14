// рендерит игру третьего типа
export const renderTypeThreeGame = (game) => `<div class="game">
<p class="game__task">${game.description}</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    ${game.ansvers[1]}
  </div>
  <div class="game__option  game__option--selected">
  ${game.ansvers[2]}
  </div>
  <div class="game__option">
  ${game.ansvers[3]}
  </div>
</form>
<div class="stats">
</div>
</div>`;
