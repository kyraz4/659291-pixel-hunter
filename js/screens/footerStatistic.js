// возаращает заполненную статистику
import fillStats from '../fillSats';
export const footerStatistic = (game) => `
<ul class="stats">
${fillStats(game)}
</ul>`;
