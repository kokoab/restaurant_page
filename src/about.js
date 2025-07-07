export default (function CreateAboutPage() {
    const mainContainer = document.querySelector("#content");
    const newContainer = document.createElement("div");
    newContainer.classList.add("main-container");

    newContainer.innerHTML = `
    <h1>about potanginamo</h1>
    
    
    `;


    
    
    mainContainer.appendChild(newContainer);
}) ();