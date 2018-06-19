// рендерит игру третьего типа
export const renderTypeThreeGame = (game) => `<div class="game">
<p class="game__task">${game.title}</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
  <img src="${game.urls[0]}" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
  <img src="${game.urls[1]}" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option">
  <img src="${game.urls[2]}" alt="Option 1" width="304" height="455">
  </div>
</form>
<div class="stats">
</div>
</div>`;
