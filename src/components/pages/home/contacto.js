export function loadContacto() {
    const content = /* html */
    `
    <section id="contact" class="bg-gray-800 text-white p-6">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold montserrat-alternates-semibold text-center mb-8">
      Contacto <a href="#inicio"><i class="bi bi-chevron-up" style="font-size: 2rem; color: cornflowerblue;"></i></a>
      </h2>
      <form action="#" method="POST" class="max-w-xl mx-auto">
        <div class="mb-4">
          <label for="name" class="block text-gray-300 mb-2">Nombre</label>
          <input type="text" id="name" name="name" class="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-300 mb-2">Email</label>
          <input type="email" id="email" name="email" class="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-300 mb-2">Mensaje</label>
          <textarea id="message" name="message" rows="4" class="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </div>
  </section>     
  `

    return content
}