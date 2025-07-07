// menu.js

/* ---------- simple data models ---------------------------------------- */
class Meal {
  constructor(name, price, currency = "$") {
    this.name = name;
    this.price = price;
    this.currency = currency;
  }
}
class Package {
  constructor(name, meals) {
    this.name = name;
    this.meals = meals;
  }
}

/* ---------- menu data -------------------------------------------------- */
const packages = [
  new Package("starter", [
    new Meal("garlic bread", "3.00"),
    new Meal("tomato soup", "4.00"),
    new Meal("caesar salad", "25.00"),
  ]),
  new Package("main meal", [
    new Meal("Grilled chicken", "9.00"),
    new Meal("spaghetti bolognese", "8.00"),
    new Meal("margherita pizza", "10.00"),
  ]),
  new Package("drinks", [
    new Meal("orange juice", "2.50"),
    new Meal("soft drinks", "2.00"),
    new Meal("iced coffee", "2.50"),
  ]),
  new Package("dessert", [
    new Meal("brownie", "3.50"),
    new Meal("ice cream", "3.00"),
    new Meal("cheesecake", "4.00"),
  ]),
];

/* ---------- tiny helper ------------------------------------------------ */
const el = (tag, cls, txt) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt) e.textContent = txt;
  return e;
};

/* ---------------------------------------------------------------------- */
/*  EXPORT: createMenuPage() – returns a DOM structure without <img>      */
/* ---------------------------------------------------------------------- */
export default function createMenuPage() {
  const container = el("div", "main-container");
  const grid = el("div", "menu-content-box");
  container.appendChild(grid);

  const h1 = el("h1", "text-primary text-primary-menu");
  h1.innerHTML = `<span class="text-primary--accent">menu</span>`;
  grid.appendChild(h1);

  packages.forEach((pack) => {
    const card = el("div", "package");
    card.appendChild(el("div", "package-title", pack.name));

    const list = el("div", "packages");
    pack.meals.forEach(({ name, price, currency }) => {
      const meal = el("div", "meal");
      meal.appendChild(el("span", "meal-name", name));
      meal.appendChild(el("span", "meal-price", `${currency}${price}`));
      list.appendChild(meal);
    });

    card.appendChild(list);
    grid.appendChild(card);
  });

  return container;
}
