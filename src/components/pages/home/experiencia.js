export function loadExperiencia() {
    const content = /* html */
    `
    <section id="experiencia" class="my-8 container gradiente3 mx-auto mt-5">
      
      <div class="flex flex-row">
      
        <div class="container mx-auto p-4">
          <h2 class="text-3xl montserrat-alternates-semibold text-center mb-8">
            Experiencia <a href="#inicio"><i class="bi bi-chevron-up" style="font-size: 2rem; color: cornflowerblue;"></i></a>
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
              <div class="order-1 project-card-exp soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">1997-2001</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                <span class="font-bold">Carrier Transicold de México</span> <br/> 
                Capturista de datos <br/> 
                <span class="text-[11px]">Sistema Fourth Shift - ERP</span></p>
              </div>
            </div>
    
            <!-- Evento 2 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12 project-card-exp soft-glass-ui rounded-lg shadow-xl px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">2002-2013</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                  <span class="font-bold">Grupo sur promociones de México</span> <br/> 
                  Capturista, Analista programador, Jefe de Sistemas <br/>
                  <span class="text-[11px]">Microsotft Office, Access, Visual Basic, ASP.Net 2.0.</span></p>
                </p>
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
              <div class="order-1 project-card-exp soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">2013-2017</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                  <span class="font-bold">Telcel</span><br/>
                  Analista programador<br/>
                  <span class="text-[11px]">ASP.Net 3.5, C#, SQL Server, Javascript, AngularJS</span></p>
                </p>
              </div>
            </div>
    
            <!-- Evento 4 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12 project-card-exp soft-glass-ui rounded-lg shadow-xl px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">2017-2023</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                  <span class="font-bold">Afore XXI - Banorte</span><br/>
                  Programador Web<br/>
                  <span class="text-[11px]">ASP.Net 4, ASP.Net Core 6, C#, SQL Server, PHP, MySQL, Javascript</span></p>
                </p>
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
              <div class="order-1 project-card-exp soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">2024-Actualidad</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                  <span class="font-bold">ALSEA</span><br/>
                  Programador Web<br/>
                  <span class="text-[11px]">ASP.Net 4.5 - Angular, C#, SQL Server, Javascript</span></p>
                </p>
              </div>
            </div>
    
            <!-- Evento 6 -->
            <div class="mb-8 flex justify-between items-center w-full">
              <div class="order-1 w-5/12 project-card-exp soft-glass-ui rounded-lg shadow-xl px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">Proximamente</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                  <span class="font-bold">Freelance</span><br/>
                  Desarrollador y Diseñador Web<br/>
                  <span class="text-[11px]">Creación de Sistemas y aplicaciones Web, Páginas Web, Wordpress</span></p>
                </p>
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
              <div class="order-1 project-card-exp soft-glass-ui rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 ubuntu-sans-mono-code font-bold text-white text-xl">Mi experiencia</h3>
                <p class="text-sm ubuntu-sans-mono-code leading-snug tracking-wide text-white text-opacity-100">
                  "Más de 20 años de experiencia en el sector de la tecnología. 
                  Se dice fácil, pero el tiempo me ha dado experiencias y conocimiento; 
                  pero más importante, el tiempo me ha enseñado que el trabajo duro y la honestidad 
                  son valores que hacen mi vida más feliz."
                </p>
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