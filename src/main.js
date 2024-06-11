import './assets/styles/tailwind.css'
import './assets/styles/style.css'
import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';
import { loadContent, navigateTo  } from './components/content.js';
import { enableSmoothScroll } from './utils/smoothScroll.js';
import { hoverExperience } from './utils/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadContent();
  loadFooter();
  
  // Add event listeners to navigation links 
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const url = event.target.getAttribute('href');
      navigateTo(url);
      enableSmoothScroll();  
      });
    });
      
    hoverExperience();
});

// Handle browser navigation (back/forward buttons)
window.addEventListener('popstate', () => {
  debugger;
  loadContent();
  enableSmoothScroll();
});