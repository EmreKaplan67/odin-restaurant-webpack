import loadHome from "./pages/home.js";
import { contentEl } from "./domUtils.js";

export default function initialLoad() {
    const content = contentEl();
    const home = loadHome();
    content.appendChild(home);
}