import { variables } from "./variables.js";

const { controlButtons } = variables;
const { formPages } = variables;

const CLASS_NAMES = variables.classNames;

export const setControls = (int) => {

  switch (int) {

  case Number(formPages[0].dataset.target) :
    controlButtons[0].classList.toggle(CLASS_NAMES.hiddenButton, true);
    controlButtons[1].classList.toggle(CLASS_NAMES.hiddenButton, false);
    controlButtons[2].classList.toggle(CLASS_NAMES.hiddenButton, true);
    break;

  case Number(formPages[formPages.length - 1].dataset.target) :
    controlButtons[0].classList.toggle(CLASS_NAMES.hiddenButton, false);
    controlButtons[1].classList.toggle(CLASS_NAMES.hiddenButton, true);
    controlButtons[2].classList.toggle(CLASS_NAMES.hiddenButton, false);
    break;

  default :
    controlButtons[0].classList.toggle(CLASS_NAMES.hiddenButton, false);
    controlButtons[1].classList.toggle(CLASS_NAMES.hiddenButton, false);
    controlButtons[2].classList.toggle(CLASS_NAMES.hiddenButton, true);

  }

};
