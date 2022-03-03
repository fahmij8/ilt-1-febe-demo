const drawerButtonElement = document.querySelector(".drawer-button");
const navElement = document.querySelector("nav");
const mainElement = document.querySelector("main");

drawerButtonElement.addEventListener("click", () => {
    navElement.classList.toggle("nav-open");
});

mainElement.addEventListener("click", () => {
    navElement.classList.remove("nav-open");
});
