export function loadProjects() {
    const content = /* html */
    `
    <section id="projects" class="container gradiente2 rounden-lg mx-auto p-6">
    <h2 class="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Proyecto 1 -->
      <div class="bg-white soft-glass-ui rounded-lg shadow-lg overflow-hidden">
        <!--<img src="https://via.placeholder.com/600x400" alt="Proyecto 1" class="w-full h-48 object-cover">-->
        <img src="/assets/images/Proy1.png" alt="Proyecto 1" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl montserrat-alternates-semibold font-bold mb-2">Registro de Ventas</h3>
          <p class="text-gray-300 ubuntu-sans-mono-code mb-4 ubuntu-sans-mono-code">Sistema para registrar, ventas, precios y compras de un negocio.</p>
          <a href="https://casasanmigueldemexico.com/" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 2 -->
      <div class="bg-white soft-glass-ui rounded-lg shadow-lg overflow-hidden">
        <img src="/assets/images/Proy2.png" alt="Proyecto 2" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl montserrat-alternates-semibold font-bold mb-2">Tienda Online</h3>
          <p class="text-gray-300 ubuntu-sans-mono-code mb-4">Tienda online con carrito de compras y registro de usuarios. Woocomerce.</p>
          <a href="https://store.renegonzalezcampos.com/" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 3 -->
      <div class="bg-white soft-glass-ui rounded-lg shadow-lg overflow-hidden">
        <img src="/assets/images/Proy3.png" alt="Proyecto 3" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl montserrat-alternates-semibold font-bold mb-2">Sistema para ópticas</h3>
          <p class="text-gray-300 ubuntu-sans-mono-code mb-4">Registro de clientes con sus datos y valores de cada ojo.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 4 -->
      <div class="bg-white soft-glass-ui rounded-lg shadow-lg overflow-hidden">
        <img src="/assets/images/Proy4.png" alt="Proyecto 4" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl montserrat-alternates-semibold font-bold mb-2">Grupo Sur Promociones</h3>
          <p class="text-gray-300 ubuntu-sans-mono-code mb-4">
            En la empresa desarrollo diversos sistemas, como control de vacaciones, Entrega digital de recibos de nómina y sistemas de captura en linea
            para recopilar datos en campo para analisis al cliente.
          </p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 5 -->
      <div class="bg-white soft-glass-ui rounded-lg shadow-lg overflow-hidden">
        <img src="/assets/images/Proy5.png" alt="Proyecto 5" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl montserrat-alternates-semibold font-bold mb-2">Telcel</h3>
          <p class="text-gray-300 ubuntu-sans-mono-code mb-4">
          En esta empresa desarrolle diversos módulos para el sistema de Centro de Atención a Clientes.
          Además se hicieron reportes dinámicos en linea para el analisis de información y control de cursos.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>

      <!-- Proyecto 6 -->
      <div class="bg-white soft-glass-ui rounded-lg shadow-lg overflow-hidden">
        <img src="/assets/images/Proy6.png" alt="Proyecto 6" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-2xl montserrat-alternates-semibold font-bold mb-2">Afore XXI Banorte</h3>
          <p class="text-gray-300 ubuntu-sans-mono-code mb-4">
          Manejo de Sistemas de incidencias, sistema de ventanilla única y sistema para el Control de Tablets y Biométricos 
          Se hicieron nuevos módulos para el manejo de información y reportes ASG.</p>
          <a href="#" class="text-blue-500 hover:text-blue-700 font-bold">Ver más</a>
        </div>
      </div>
    </div>
  </section>
    `

    return content
}