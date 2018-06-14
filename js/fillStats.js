// заполняет футер статистикой
export const fillStats = (game = []) => {
  for (let i = 0; i < game.length; i++) {
    return `<li class="stats__result stats__result--${game[i]}"></li>`;
  }
  return 0;
};
