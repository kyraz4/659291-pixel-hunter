// #elemFromTemplate

export const getElementFromTeamplate = (temp) => {
  const newDom = document.createElement(`div`);
  newDom.innerHTML = temp;
  return newDom;
};

