// home.js (or whatever module boots the page)
import coffeeImage from "./images/coffee.jpg";
import "./styles.css";          // ensure the CSS above is bundled

export default function createHomePage() {
    /* regular page content — stays the same */
    const container = document.createElement("div");
    container.classList.add("main-container");

    const mainText = document.createElement("h1");
    mainText.classList.add("main-text");
    mainText.textContent = "coffee that just works";

    const subtext = document.createElement("p");
    subtext.classList.add("sub-text");
    subtext.textContent = "choose your own kind of coffee, anything";

    /* --- one‑time full‑viewport background layer ------------- */
    if (!document.querySelector(".fullscreen-bg")) {  // make sure we add it just once
        const bg = document.createElement("div");
        bg.className = "fullscreen-bg";
        bg.style.backgroundImage = `url(${coffeeImage})`;
        document.body.appendChild(bg);
    }


    container.append(mainText, subtext);
    return container;  // your render() helper will place this in #content
}
