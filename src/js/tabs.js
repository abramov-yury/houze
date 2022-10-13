const nav = document.querySelector(".tabs__navigation");
const navItems = document.querySelectorAll(".tabs__navigation-link");
const pages = document.querySelectorAll(".tabs__page");

const setActivePage = (anchor) => {

  if (!anchor) return;

  navItems.forEach((item) => {

    item.classList.toggle("tabs__navigation-link--active", anchor === item.getAttribute("href"));

  });

  pages.forEach((page) => {

    page.classList.toggle("tabs__page--active", anchor === `#${page.id}`);

  });

};

const navClickHandler = (evt) => {

  const item = evt.target.closest("a");

  if (!item) return;

  evt.preventDefault();

  const anchor = item.getAttribute("href");

  setActivePage(anchor);

};

const init = () => {

  nav.addEventListener("click", navClickHandler);

};

init();
