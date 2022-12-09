const container = document.querySelector(".theme-switcher");
const controlThemeLight = container.querySelector(".theme-switcher__control[value='light']");
const controlThemeSystem = container.querySelector(".theme-switcher__control[value='system']");
const controlThemeDark = container.querySelector(".theme-switcher__control[value='dark']");

const controlThemeLightHandler = () => {

  document.documentElement.dataset.themeName = "light";

};

const controlThemeDarkHandler = () => {

  document.documentElement.dataset.themeName = "dark";

};

const controlThemeSystemHandler = () => {

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {

    document.documentElement.dataset.themeName = "dark";

  } else {

    document.documentElement.dataset.themeName = "light";

  }

};

const init = () => {

  controlThemeLight.addEventListener("change", controlThemeLightHandler);
  controlThemeSystem.addEventListener("change", controlThemeSystemHandler);
  controlThemeDark.addEventListener("change", controlThemeDarkHandler);

};

init();
