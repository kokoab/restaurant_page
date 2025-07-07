export default (function CreateMenuPage() {
    const mainContainer = document.querySelector("#content");
    const newContainer = document.createElement("div");
    newContainer.classList.add("main-container");

    newContainer.innerHTML = `
    <h1>Menu potanginamo</h1>
    
    
    `;


    
    
    mainContainer.appendChild(newContainer);
}) ();