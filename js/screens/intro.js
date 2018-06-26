// import {getElementFromTeamplate} from '../elemFromTemplate';
import changeScreen from '../selectPage';
// import greetingsScreen from '../screens/greetings';
// import addDelegatedEventListener from '../addDelegatedEventListener';
import GameIntro from '../views/introViews';
import createGreetingScreenFragment from '../screens/greetings';
// const introScreen = getElementFromTeamplate(`<div id="main" class="central__content">
//   <div id="intro" class="intro">
//     <h1 class="intro__asterisk">*</h1>
//     <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//   </div>
// </div>
// <footer class="footer">
//   <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
//   <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
//   <div class="footer__social-links">
//     <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
//     <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
//     <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
//     <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
//   </div>
// </footer>`);
// addDelegatedEventListener(`click`, `.intro__asterisk`, () => changeScreen(greetingsScreen));
// export default introScreen;

const createIntroFragment = () => {
  const introView = new GameIntro();
  introView.onAsteriskClick = () => changeScreen(createGreetingScreenFragment());
  return introView.element;

};

export default createIntroFragment;
