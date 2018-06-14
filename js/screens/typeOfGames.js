const typeOne = {
  description: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [`<input name="question1" type="radio" value="photo">
  <span>Фото</span>`,
  `<input name="question1" type="radio" value="paint">
<span>Рисунок</span>`,
  `<input name="question2" type="radio" value="photo">
  <span>Фото</span>`,
  `<input name="question2" type="radio" value="paint">
  <span>Рисунок</span>`]
};

const typeTwo = {
  description: `Угадай, фото или рисунок?`,
  answers: [`<input name="question2" type="radio" value="photo">
  <span>Фото</span>`,
  `<input name="question2" type="radio" value="paint">
   <span>Рисунок</span>`]
};

const typeThree = {
  description: `Найдите рисунок среди изображений`,
  answers: [`<img src="https://k42.kn3.net/CF42609C8.jpg" alt="Option 1" width="304" height="455">`,
    `<img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">`,
    `<img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">`]
};


export const typeOfGames = {typeOne, typeTwo, typeThree};
