export function loadFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = /*html*/ `
    <nav id="nave" class="flex justify-between bg-black text-gray-100 absolute w-full p-4 shadow-lg z-10 opacity-70">
        <a href="#about" class="text-gray-200 hover:text-gray-400">Redes Sociales</a>
        <p>&copy; 2024 My Company. All rights reserved.</p>
        <a href="/" class="text-gray-200 hover:text-gray-400">Inicio</a>
    </nav>
    `;
}