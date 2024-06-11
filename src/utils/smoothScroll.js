export function enableSmoothScroll() {
    document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  