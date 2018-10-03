const mainElement = document.querySelector(`main.central`);

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

export default changeScreen;

