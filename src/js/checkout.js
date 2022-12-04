import { variables } from "./variables.js";
import { setControls } from "./controls.js";
import { setProgress } from "./progress.js";

const { controlButtons } = variables;
const { formPages } = variables;

const CLASS_NAMES = variables.classNames;
const datasetWarning = "Атрибут dataset задан некорректно";

const getCurrentPage = () => Array.from(formPages).find((page) => page.classList.contains(CLASS_NAMES.activePage));
const getNextPage = (int) => Array.from(formPages).find((page) => Number(page.dataset.target) === int);

const setActivePage = (direction) => {

  const currentPage = getCurrentPage();
  if (!currentPage) return;

  let target = Number(currentPage.dataset.target);
  const operand = Number(direction.slice(1));

  if (Number.isNaN(target) || Number.isNaN(operand)) {

    throw Error(datasetWarning);

  }

  switch (direction.slice(0, 1)) {

  case "+" :
    target += operand;
    break;
  case "-" :
    target -= operand;
    break;
  default :
    throw Error(datasetWarning);

  }

  currentPage.classList.remove(CLASS_NAMES.activePage);
  const nextPage = getNextPage(target);
  nextPage.classList.add(CLASS_NAMES.activePage);

  setControls(target);
  setProgress(target);

};

const buttonClickHandler = (evt) => {

  evt.preventDefault();
  const { direction } = evt.target.dataset;

  if (!direction) return;
  setActivePage(direction);

};

const init = () => {

  controlButtons.forEach((button) => {

    button.addEventListener("click", buttonClickHandler);

  });

};

init();
