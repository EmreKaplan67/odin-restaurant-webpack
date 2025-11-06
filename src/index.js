import "./styles.css";
import { contentEl, clearContent } from "./domUtils";

import initialLoad from "./initialLoad";
import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadReservation from "./pages/reservation";
import loadContact from "./pages/contact";
import loadWhoWeAre from "./pages/whoWeAre";

// initial page build
document.addEventListener("DOMContentLoaded", () => {
    initialLoad();

    // set date min for reservation input if the module uses #date
    setDateMin();

    // wire up nav buttons
    const nav = document.querySelector('.navigation')
    nav.addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-button')
        if (!btn) return
        
        const tab = btn.dataset.tab
        switchTab(tab);
    });
});

function switchTab(tabName) {
    const content = contentEl()
    clearContent();
    
    let page;
    switch (tabName) {
        case 'home':
            page = loadHome()
            break;
        case 'menu':
            page = loadMenu()
            break;
        case 'reservation':
            page = loadReservation()
            break;
        case 'contact':
            page = loadContact()
            break;
        case 'who-we-are':
            page = loadWhoWeAre()
            break;
        default:
            page = loadHome()
    }

    content.appendChild(page)
    // Activate the active nav style
    updateActiveNav(tabName)
}

function updateActiveNav(tabName) {
    document.querySelectorAll('.nav-button').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.tab === tabName)
    });
}

function setDateMin() {
  const dateInput = document.querySelector('#date');
  if (!dateInput) return;
  const todayStr = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', todayStr);
  // optional max date 30 days ahead:
  const max = new Date();
  max.setDate(max.getDate() + 30);
  dateInput.setAttribute('max', max.toISOString().split('T')[0]);
}