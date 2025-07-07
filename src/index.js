import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

const content = document.getElementById("content");

function render(pageFn) {
  content.replaceChildren(pageFn());   
}


render(homePage);

document.querySelector("nav").addEventListener("click", (e) => {
    const link = e.target.closest("[data-page]");
    if (!link) return;
    e.preventDefault();

    switch (link.dataset.page) {
        case "home": render(homePage); break;
        case "menu": render(menuPage); break;
        case "about": render(aboutPage); break;
    }
});