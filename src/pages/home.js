import { clearContent, createEl } from "../domUtils";
import restaurantImage from "../assets/restaurant.png";

export default function loadHome() {
  const container = createEl("section", { className: "hero", id: "hero" });
  const image = createEl("img", {
    className: "hero-image",
    attrs: { src: restaurantImage, alt: "Restaurant Hero" },
  });
  const heroText = createEl("div", { className: "hero-text" });
  heroText.innerHTML = `
        <h1>Welcome to Odin Restaurant</h1>
        <p>Where flavors meet craftsmanship. Enjoy a culinary journey like no other.</p>
    `;

  content.appendChild(container);
  container.appendChild(image);
  container.appendChild(heroText);

  return container;
}
