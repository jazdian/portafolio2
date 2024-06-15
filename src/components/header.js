export function loadHeader() {
    const header = document.getElementById('header');
    header.innerHTML = /*html*/ `
    <!-- Navbar -->
    <nav class="absolute w-full gradiente1 p-4 shadow-lg z-10 opacity-70">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="nav-link text-white text-lg font-semibold ubuntu-sans-mono-code2 text-[24px]">
          █▓▒░&lt;Inicio/&gt;░▒▓█
        </a>
  
        <!-- External Links -->
        <div class="hidden md:flex space-x-4">
          <a href="https://jazdian.wordpress.com/" class="text-gray-300 hover:text-white montserrat-alternates-regular">BLOG</a>
        </div>

      </div>
    </nav>
    `;
  }