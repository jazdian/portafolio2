export function loadHeader() {
    const header = document.getElementById('header');
    header.innerHTML = /*html*/ `
    <!-- Navbar -->
    <nav class="absolute w-full bg-black p-4 shadow-lg z-10 opacity-60">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="nav-link text-white text-lg font-semibold ubuntu-sans-mono-code2 text-[24px]">
          █▓▒░&lt;Inicio/&gt;░▒▓█
        </a>
  
        <!-- External Links -->
        <div class="hidden md:flex space-x-4">
          <a href="/politicas" class="nav-link text-gray-300 hover:text-white montserrat-alternates-regular">Políticas</a>
          <a href="/privacidad" class="nav-link text-gray-300 hover:text-white montserrat-alternates-regular">Privacidad</a>
          <a href="/acercade" class="nav-link text-gray-300 hover:text-white montserrat-alternates-regular">Acerca de</a>
          <a href="https://jazdian.wordpress.com/" class="text-gray-300 hover:text-white montserrat-alternates-regular">BLOG</a>
        </div>

      </div>
    </nav>
    `;
  }