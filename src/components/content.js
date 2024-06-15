import { loadMyName } from './pages/home/myname'
import { loadExperiencia } from './pages/home/experiencia';
import { loadProjects } from './pages/home/projects';
import { loadContacto } from './pages/home/contacto';
import { loadPageAbout } from './pages/about/about';
import { loadPagePrivacidad } from './pages/privacy/privacidad';
import { loadPagePoliticas } from './pages/politics/politicas';

export function loadContent() {
    const content = document.getElementById('content');
    const path = window.location.pathname;
  
    let htmlContent = '';
  
    switch (path) {
      case '/':
        htmlContent = loadMyName();
        htmlContent += loadExperiencia();
        htmlContent += loadProjects();
        htmlContent += loadContacto();
        break;
      case '/index.html':
          htmlContent = loadMyName();
          htmlContent += loadExperiencia();
          htmlContent += loadProjects();
          htmlContent += loadContacto();
          break;
      case '/acercade':
        //htmlContent = '<h1 class="flex items-center justify-center h-screen z-10">About Page</h1><p>Learn more about us on this page.</p>';
        htmlContent = loadPageAbout();
        break;
      case '/privacidad':
        //htmlContent = '<h1 class="flex items-center justify-center h-screen z-10">About Page</h1><p>Learn more about us on this page.</p>';
        htmlContent = loadPagePrivacidad();
        break;
      case '/politicas':
        //htmlContent = '<h1>Contact Page</h1><p>Contact us through this page.</p>';
        htmlContent = loadPagePoliticas();
        break;
      default:
        htmlContent = `<section class="flex items-center justify-center h-screen z-10">
                        <h1>404 &nbsp;</h1><p> Page not found.</p>
                        </section>`;
        break;
    }
  
    content.innerHTML = htmlContent;
  }
  
  export function navigateTo(url) {
    debugger;
    if(url.includes("localhost") || url.includes("renegonzalezcampos")){
      history.pushState(null, null, url);
      loadContent();
    } else {
      window.open(url);
    }
  }
  