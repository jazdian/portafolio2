export function loadProjects() {
    const content = /* html */
    `
    <section id="projects" class="container mx-auto p-6">
    <h2 class="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Proyecto 1 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Proyecto 1" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Proyecto 1</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 2 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Proyecto 2" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Proyecto 2</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 3 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Proyecto 3" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Proyecto 3</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 4 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Proyecto 4" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Proyecto 4</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 5 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Proyecto 5" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Proyecto 5</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 6 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/600x400" alt="Proyecto 6" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Proyecto 6</h3>
          <p class="text-gray-700 mb-4">Descripción breve del proyecto 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>
    </div>
  </section>
    `

    return content
}