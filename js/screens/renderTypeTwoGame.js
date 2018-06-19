// рендерит игру третьего типа
export const renderTypeTwoGame = (game) => `<div class="game">
<p class="game__task">${game.title}</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src=${game.urls} alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
    <input name="question1" type="radio" value="photo">
    <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
    <input name="question1" type="radio" value="paint">
    <span>Рисунок</span>
    </label>
  </div>
  </form>
<div class="stats">
</div>
  </div>`;
