const checkout = document.querySelector(".checkout");
const controlButtons = checkout.querySelectorAll(".checkout-form__button");
const formPages = checkout.querySelectorAll(".checkout-form__page");

const CLASS_NAMES = {
  activePage: "checkout-form__page--active",
  hiddenButton: "button--hidden",
  activeTariff: "tariff-plan--active",
  tariffControl: "tariff-plan__control",
};

export const variables = {
  checkout,
  controlButtons,
  formPages,
  classNames: CLASS_NAMES,
};
