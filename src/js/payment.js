import { variables } from "./variables.js";

const { checkout } = variables;
const controls = checkout.querySelectorAll("input[name='payment-method']");
const currentControl = checkout.querySelector("input[name='payment-method']:checked");

const controlChangeHandler = (evt) => {

  const activeContainer = checkout.querySelector(".payment-type--active");
  if (activeContainer) activeContainer.classList.remove("payment-type--active");
  evt.currentTarget.closest(".payment-type").classList.add("payment-type--active");

};

const init = () => {

  controls.forEach((control) => control.addEventListener("change", controlChangeHandler));

  if (currentControl) currentControl.closest(".payment-type").classList.add("payment-type--active");

};

init();
