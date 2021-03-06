const LEVELS_TYPES = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};

const ANSWER_TYPES = {
  'PHOTO': `photo`,
  'PAINT': `paint`
};

export const GAME = {
  levels: [
    {
      type: LEVELS_TYPES.SINGLE,
      title: `Угадай, фото или рисунок?`,
      urls: `https://k42.kn3.net/CF42609C8.jpg`,

      answers:
        {
          answerInputTrueValue: `photo`,
          answerType: ANSWER_TYPES.PHOTO,
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.TRIPLE,
      title: `Найдите рисунок среди изображений`,
      urls: [
        `http://i.imgur.com/1KegWPz.jpg`,
        `https://k32.kn3.net/5C7060EC5.jpg`,
        `https://i.imgur.com/DiHM5Zb.jpg`
      ],
      answers:
        {
          answerImageUrl: `https://k32.kn3.net/5C7060EC5.jpg`,
          answerType: ANSWER_TYPES.PAINT,
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.SINGLE,
      title: `Угадай, фото или рисунок?`,
      urls: [
        `https://k32.kn3.net/5C7060EC5.jpg`
      ],
      answers:
        {
          answerInputTrueValue: `paint`,
          answerType: ANSWER_TYPES.PAINT,
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.DOUBLE,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      urls: [
        `https://k42.kn3.net/D2F0370D6.jpg`,
        `http://i.imgur.com/DKR1HtB.jpg`
      ],
      answers:
        {
          answerInputTrueValue: [`photo`, `paint`],
          answerType: [ANSWER_TYPES.PHOTO, ANSWER_TYPES.PAINT],
          isCorrect: [true, false]
        }
    },
    {
      type: LEVELS_TYPES.SINGLE,
      title: `Угадай, фото или рисунок?`,
      urls: [
        `http://i.imgur.com/1KegWPz.jpg`
      ],
      answers:
        {
          answerInputTrueValue: `photo`,
          answerType: ANSWER_TYPES.PHOTO,
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.DOUBLE,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      urls: [
        `https://k42.kn3.net/D2F0370D6.jpg`,
        `http://i.imgur.com/DKR1HtB.jpg`
      ],
      answers:
        {
          answerImageUrl: ``,
          answerType: [ANSWER_TYPES.PHOTO, ANSWER_TYPES.PAINT],
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.DOUBLE,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      urls: [
        `https://k42.kn3.net/D2F0370D6.jpg`,
        `http://i.imgur.com/DKR1HtB.jpg`
      ],
      answers:
        {
          answerImageUrl: ``,
          answerType: [ANSWER_TYPES.PHOTO, ANSWER_TYPES.PAINT],
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.SINGLE,
      title: `Угадай, фото или рисунок?`,
      urls: [
        `http://i.imgur.com/1KegWPz.jpg`
      ],
      answers:
        {
          answerInputTrueValue: `photo`,
          answerType: ANSWER_TYPES.PHOTO,
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.DOUBLE,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      urls: [
        `https://k42.kn3.net/D2F0370D6.jpg`,
        `http://i.imgur.com/DKR1HtB.jpg`
      ],
      answers:
        {
          answerImageUrl: ``,
          answerType: [ANSWER_TYPES.PHOTO, ANSWER_TYPES.PAINT],
          isCorrect: true
        }
    },
    {
      type: LEVELS_TYPES.SINGLE,
      title: `Угадай, фото или рисунок?`,
      urls: [
        `http://i.imgur.com/1KegWPz.jpg`
      ],
      answers:
        {
          answerImageUrl: `http://i.imgur.com/1KegWPz.jpg`,
          answerType: ANSWER_TYPES.PHOTO,
          isCorrect: true
        }
    }
  ]
};


