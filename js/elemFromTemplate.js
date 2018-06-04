// #elemFromTemplate

export const getElementFromTeamplate = (temp) => {
  let newDom = document.createElement(`div`);
  newDom.innerHTML = temp;
  return newDom;
};

