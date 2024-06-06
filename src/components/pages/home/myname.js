export function loadMyName() {
    const content = /* html */
    `<section id="inicio" class="flex items-center justify-center h-screen">
      <div class="text-center">     
        <h1 class="text-[55px] font-bold montserrat-alternates-semibold">René González Campos</h1>
        <p class="mt-4 ubuntu-sans-mono-code text-3xl">Programador Senior</p>
        <p class="mt-4 text-[18px] ubuntu-sans-mono-code text-sm text-gray-500 hidden md:block ">Desarrollo experiancias digitales al pixel, accesibles y atractivas.</p>
      </div>
    </section>

    <!-- Internal Links -->
    <div class="absolute top-2/3 flex item-center justify-center space-x-4 z-10" style="width:100%;">
      <a href="#experiencia" class="ubuntu-sans-mono-code text-gray-300 hover:text-white z-20">&lt;experiencia/&gt;</a>
      <a href="#projects" class="ubuntu-sans-mono-code text-gray-300 hover:text-white">&lt;proyectos/&gt;</a>
      <a href="#contact" class="ubuntu-sans-mono-code text-gray-300 hover:text-white">&lt;contacto/&gt;</a>
    </div>
    `

    return content
}