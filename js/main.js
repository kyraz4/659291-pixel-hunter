import module0 from '/Users/Admin/pixel-hunter/659291-pixel-hunter/js/intro.js';
import {changeScreen} from '/Users/Admin/pixel-hunter/659291-pixel-hunter/js/selectPage';
changeScreen(module0);
// changeScreen(module0);
// const RIGHT_ARROW = 37;
// const LEFT_ARROW = 39;

// const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

// let current = 0;
// const select = (index) => {
//   index = index < 0 ? screens.length - 1 : index;
//   index = index >= screens.length ? 0 : index;
//   current = index;
//   selectPage(screens[current]);
// };

// document.addEventListener(`keydown`, (evt) => {
//   switch (evt.keyCode) {
//     case 37:
//       select(current + 1);
//       break;
//     case 39:
//       select(current - 1);
//       break;
//   }
// });

// let addArrows = document.querySelector(`body`);
// const arrows = document.createElement(`div`);
// arrows.innerHTML = `<div class="arrows__wrap">
//   <style>
//     .arrows__wrap {
//       position: absolute;
//       top: 95px;
//       left: 50%;
//       margin-left: -56px;
//     }
//     .arrows__btn {
//       background: none;
//       border: 2px solid black;
//       padding: 5px 20px;
//     }
//   </style>
//   <button class="arrows__btn"><-</button>
//   <button class="arrows__btn">-></button>
// </div>`;

// addArrows.appendChild(arrows);

// let arrowsBtn = document.querySelector(`.arrows__wrap`);
// arrowsBtn.addEventListener(`click`, () => {
//   select(current - 1);
// });


