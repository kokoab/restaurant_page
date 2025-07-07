// about.js  ─── drop this in your tabs folder

export default function createAboutPage() {
  /* outer wrapper (same class you use everywhere) */
  const container = document.createElement("div");
  container.classList.add("main-container");

  /* center everything horizontally & vertically */
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.textAlign = "center";
  container.style.minHeight = "70vh";   // keeps it nicely centered even on tall screens

  /* heading */
  const heading = document.createElement("h1");
  heading.className = "text-primary-menu";
  heading.textContent = "about us";
  container.appendChild(heading);

  /* glassy card (re‑uses .package styling) */
  const card = document.createElement("div");
  card.classList.add("package");

  /* card title */
  const title = document.createElement("div");
  title.classList.add("package-title");
  title.textContent = "Our Story";
  card.appendChild(title);

  /* paragraph content */
  [
    "We believe coffee is more than just a drink — it's an experience.",
    "Founded in 2024, we source only the finest beans and blend tradition with innovation to create unforgettable flavors.",
    "Whether you're here for a quick pick‑me‑up or a cozy chat, we’re honored to serve you."
  ].forEach(text => {
    const p = document.createElement("p");
    p.classList.add("meal-name");       // inherits nice premium text styling
    p.style.lineHeight = "1.6";
    p.style.fontSize = "1.1rem";
    p.textContent = text;
    card.appendChild(p);
  });

  container.appendChild(card);
  return container;   // your render() helper swaps this into <main>
}
