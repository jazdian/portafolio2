export function loadFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = /*html*/ `
    <nav id="nave" class="flex justify-between gradiente1 text-white absolute w-full p-4 shadow-lg z-10">
        <a href="https://x.com/jazdian" class="text-gray-200 hover:text-gray-400">Red X</a>
        <p>2024</p>
        <p>&nbsp;RGC</p>
    </nav>
    `;
}