export const contentEl = () => document.getElementById("content");

export function clearContent() {
    const el = contentEl();
    el.innerHTML = "";
}

export function createEl(tag = 'div', options = {}) {
  const el = document.createElement(tag);

  if (options.className){
    if (Array.isArray(options.className)){
      el.className = options.className.join(" ");
    } else {
      el.className = options.className;
    }
  }
  if (options.id) el.id = options.id;
  if (options.text) el.textContent = options.text;
  if (options.html) el.innerHTML = options.html;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([k, v]) => el.setAttribute(k, v));
  }
  return el;
}