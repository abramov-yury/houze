import { variables } from "./variables.js";

const { checkout } = variables;
const progressItems = checkout.querySelectorAll(".progress__item");

const CLASS_NAMES = {
  active: "progress__item--active",
  checked: "progress__item--checked",
};

export const setProgress = (int) => {

  const currentProgressStage = Array.from(progressItems).find((item) => Number(item.dataset.stage) === int);
  const previousProgressStage = Array.from(progressItems).find((item) => Number(item.dataset.stage) === int - 1);
  const nextProgressStage = Array.from(progressItems).find((item) => Number(item.dataset.stage) === int + 1);

  // add checked state
  if (previousProgressStage && !previousProgressStage.classList.contains(CLASS_NAMES.checked)) {

    previousProgressStage.classList.add(CLASS_NAMES.checked);

  }

  // remove checked state
  if (currentProgressStage.classList.contains(CLASS_NAMES.checked)) {

    currentProgressStage.classList.remove(CLASS_NAMES.checked);

  }

  // remove active state
  if (previousProgressStage && previousProgressStage.classList.contains(CLASS_NAMES.active)) {

    previousProgressStage.classList.remove(CLASS_NAMES.active);

  }

  if (nextProgressStage && nextProgressStage.classList.contains(CLASS_NAMES.active)) {

    nextProgressStage.classList.remove(CLASS_NAMES.active);

  }

  // add active state
  currentProgressStage.classList.add(CLASS_NAMES.active);

};
