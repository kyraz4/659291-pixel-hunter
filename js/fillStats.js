// заполняет футер статистикой
export const fillStats = (stats = []) => {
  for (let i = 0; i < stats.length; i++) {
    if (stats[i] === null) {
      return `<li class="stats__result stats__result--unknown"></li>`;
    }
  }
  return 0;
};
