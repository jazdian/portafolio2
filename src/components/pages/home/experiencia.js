export function loadExperiencia() {
    const content = /* html */
    `
    <section id="experiencia" class="my-8 container gradiente3 mx-auto mt-5">
      
      <div class="flex flex-row">
      
        <div class="container mx-auto p-4">
          <h2 class="text-3xl ubuntu-sans-mono-code text-center mb-8">
            Experiencia
          </h2>
          <div class="flex items-center justify-center">
            <div class="text-center">
              <img src="assets/images/Imagen_RGC.png" class="w-40 h-64 mr-4 rounded-full mx-auto shadow-lg">
            </div>
          </div>
          <div class="relative">
            <!-- Línea central -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
    
            <!-- Evento 1 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div class="order-1 soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">1997-2001</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100"><span class="font-bold">Carrier Transicold de México</span> - Capturista de datos</p>
              </div>
            </div>
    
            <!-- Evento 2 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12 soft-glass-ui rounded-lg shadow-xl px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">2001-2012</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100"><span class="font-bold">Grupo sur promociones</span> - Capturista de datos, Analista programador, Jefe de Sistemas.</p>
              </div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div class="order-1 w-5/12"></div>
            </div>
    
            <!-- Evento 3 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div class="order-1 soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2012-2016</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Descripción del evento 3.</p>
              </div>
            </div>
    
            <!-- Evento 4 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12 soft-glass-ui rounded-lg shadow-xl px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2016-2018</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Descripción del evento 4.</p>
              </div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div class="order-1 w-5/12"></div>
            </div>

            <!-- Evento 5 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div class="order-1 soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2018-2022</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Descripción del evento 3.</p>
              </div>
            </div>
    
            <!-- Evento 6 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12 soft-glass-ui rounded-lg shadow-xl px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2022-2023</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Descripción del evento 4.</p>
              </div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">6</h1>
              </div>
              <div class="order-1 w-5/12"></div>
            </div>

            <!-- Evento 7 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 soft-glass-ui shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">7</h1>
              </div>
              <div class="order-1 soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-white text-xl">2024</h3>
                <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">Descripción del evento 3.</p>
              </div>
            </div>            

          </div>
        </div>
      </div>
      <!-- Aquí puedes añadir tus proyectos -->
    </section>      
    `

    return content
}