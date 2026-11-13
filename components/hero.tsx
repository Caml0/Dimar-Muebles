import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      style={{ backgroundImage: "url('/Fondo-hero2.jpg')" }}
      className="relative min-h-[calc(100vh-4rem)] w-full bg-[#EAE6DF] bg-cover bg-center flex flex-col justify-between p-6 md:p-12 font-sans overflow-hidden"
    >
      <div className="relative z-10 flex flex-col justify-between min-h-[calc(100vh-8rem)] w-full max-w-7xl mx-auto my-auto">
        
        {/* ÁREA CENTRAL */}
        <main className="my-auto py-12 grid grid-cols-1 md:grid-cols-12 w-full items-center">
          
          {/* Lado Izquierdo: Libera espacio para la silla y flores de la foto */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6" />

          {/* Lado Derecho: Alinear dentro del marco blanco */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-start pl-4 md:pl-12 py-6">
            
            {/* Eslogan: Blanco con Negrilla */}
            <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug tracking-wide text-white drop-shadow-md">
              TUS DÍAS PESAN,
              <br />
              TU SOFÁ LO AGUANTA
            </h1>

            {/* Marca: Debajo, más grande y en color Chocolate */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider text-[#2A1A10] mt-4 md:mt-6 drop-shadow-sm">
              MUEBLES DIMAR
            </h2>

            {/* Botones de Acción */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#catalogo"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2A1A10] px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#EAE6DF] shadow-md transition-all hover:bg-[#3D2314]"
              >
                Ver catálogo
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://wa.me/573154905437?text=Hola%20Dimar%20Muebles,%20quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#2A1A10] bg-white/40 backdrop-blur-sm px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#2A1A10] transition-colors hover:bg-white/70"
              >
                Personalizar
              </a>
            </div>

          </div>
        </main>

        {/* PIE DE PORTADA */}
        <footer className="flex justify-between items-end border-t border-[#2A1A10]/20 pt-6">
          <div className="font-serif text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#2A1A10]">
            DISEÑO EXCLUSIVO
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#5C4638]">
            PAGE 01
          </div>
        </footer>

      </div>
    </section>
  )
}