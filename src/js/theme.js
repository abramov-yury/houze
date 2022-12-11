const lightStyles = document.querySelectorAll("style[media*=prefers-color-scheme][media*=light]");
const darkStyles = document.querySelectorAll("style[media*=prefers-color-scheme][media*=dark]");
const darkSchemeMedia = matchMedia("(prefers-color-scheme: dark)");
const switchers = document.querySelectorAll(".theme-switcher__control");

const saveScheme = (scheme) => localStorage.setItem("color-scheme", scheme);
const getScheme = () => localStorage.getItem("color-scheme");
const clearScheme = () => localStorage.removeItem("color-scheme");

const getSystemScheme = () => {

  const isDarkScheme = darkSchemeMedia.matches;

  return isDarkScheme ? "dark" : "light";

};

const switchMedia = (scheme) => {

  let lightMedia;
  let darkMedia;

  if (scheme === "auto") {

    lightMedia = "(prefers-color-scheme: light)";
    darkMedia = "(prefers-color-scheme: dark)";

  } else {

    lightMedia = (scheme === "light") ? "all" : "not all";
    darkMedia = (scheme === "dark") ? "all" : "not all";

  }

  [...lightStyles].forEach((node) => node.media = lightMedia);
  [...darkStyles].forEach((node) => node.media = darkMedia);

};

const setScheme = (scheme) => {

  switchMedia(scheme);

  if (scheme === "auto") {

    clearScheme();
    return;

  }

  saveScheme(scheme);

};

const setupScheme = () => {

  const scheme = getScheme();
  const systemScheme = getSystemScheme();

  if (scheme === null) return;

  if (systemScheme !== scheme) setScheme(scheme);

};

const setupSwitcher = () => {

  const scheme = getScheme();

  if (scheme !== null) {

    const currentSwitcher = document.querySelector(`.theme-switcher__control[value=${scheme}]`);
    currentSwitcher.checked = true;

  }

  [...switchers].forEach((switcher) => switcher.addEventListener("change", (evt) => setScheme(evt.target.value)));

};

setupSwitcher();
setupScheme();
