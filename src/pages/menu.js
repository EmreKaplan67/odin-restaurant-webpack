import { createEl } from "../domUtils";

import chocolateCake from "../assets/dishes/chocolate-cake.jpg";
import lobster from "../assets/dishes/lobster.jpg";
import veggieBowl from "../assets/dishes/veggie-bowl.jpg";
import pasta from "../assets/dishes/pasta.jpg";
import steak from "../assets/dishes/steak.jpg";
import salmon from "../assets/dishes/salmon.jpg";

const menu = [
  {
    src: salmon,
    title: "Grilled Salmon",
    desc: "Fresh Atlantic salmon, served with lemon-dill sauce and roasted vegetables.",
    price: "$18",
  },
  {
    src: steak,
    title: "Ribeye Steak",
    desc: "10oz perfectly grilled ribeye with garlic butter and seasonal sides.",
    price: "$24",
  },
  {
    src: pasta,
    title: "Creamy Pasta",
    desc: "Handmade fettuccine in a creamy wild mushroom sauce, topped with parmesan.",
    price: "$15",
  },
  {
    src: lobster,
    title: "Lobster Thermidor",
    desc: "Classic lobster baked with creamy mustard sauce, herbs, and parmesan cheese.",
    price: "$32",
  },
  {
    src: veggieBowl,
    title: "Nordic Veggie Bowl",
    desc: "Roasted seasonal vegetables, quinoa, and fresh herbs, drizzled with lemon-tahini dressing.",
    price: "$14",
  },
  {
    src: chocolateCake,
    title: "Chocolate Lava Cake",
    desc: "Warm, gooey chocolate cake with a molten center, served with vanilla ice cream.",
    price: "$9",
  },
];

function createMenuItem(src, title, desc, price) {
  const item = createEl("div", {
    className: "menu-item",
    id: "our-menu",
    html: `
    <img src="${src}" alt="${title}">
    <div class="menu-info">
        <h3>${title}</h3>
        <p class="description">${desc}</p>
        <p class="price">${price}</p>
    </div>`,
  });
  return item;
}

export default function loadMenu() {
  const container = createEl("section", { className: "menu", id: "our-menu" });
  const header = createEl("h2", { text: "Our Menu" });
  const intro = createEl("p", {
    className: "menu-intro",
    text: "Discover our chef’s selection of dishes — crafted with the finest ingredients and inspired by Nordic tradition.",
  });
  const menuGrid = createEl("div", { className: "menu-grid" });

  menu.forEach(({ src, title, desc, price }) => {
    const item = createMenuItem(src, title, desc, price);
    menuGrid.appendChild(item);
  });

  container.appendChild(header);
  container.appendChild(intro);
  container.appendChild(menuGrid);

  return container;
}
