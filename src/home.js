import homePageImage from "./images/coffee.jpg";

// this.books.forEach((book) => {
//       const bookCard = document.createElement("div");
//       bookCard.classList.add("book-card");
//       bookCard.setAttribute("data-id", book.id);

//       bookCard.innerHTML = `
//         <h3>${book.title}</h3>
//         <p><strong>Author:</strong> ${book.author}</p>
//         <p><strong>Pages:</strong> ${book.pages}</p>
//         <p><strong>Read:</strong> <button class="toggle-read-btn">${book.read ? "Yes" : "No"}</button></p>
//         <div class="buttons">
//           <button class="delete-btn">Delete</button>
//         </div>
//       `;

//       libraryContainer.appendChild(bookCard);
//     });

export default (function CreateHomePage() {
    const mainContainer = document.querySelector("#content");
    const newContainer = document.createElement("div");
    newContainer.classList.add("main-container");

    newContainer.innerHTML = `
    <h1>Hello potanginamo</h1>
    
    
    `;


    
    
    mainContainer.appendChild(newContainer);
}) ();

