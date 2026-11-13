import Image from "next/image"

const stats = [
  { value: "6+", label: "Años de oficio" },
  { value: "100%", label: "Hecho a medida" },
  { value: "Directo", label: "De fábrica" },
]

export function About() {
  return (
    <section id="nosotros" className="relative bg-[#2A1A10] text-[#EAE6DF] py-20 lg:py-28 px-6 lg:px-12 overflow-hidden">
      
      {/* FONDO DE MADERA */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-wood.jpg"
          alt="Fondo de madera Dimar"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LADO IZQUIERDO: MARCO CIRCULAR PARA LA IMAGEN */}
        <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-[#EAE6DF]/20 shadow-2xl bg-[#1A100A]">
            <Image
              src="/mueble-circulo.png"
              alt="El oficio Dimar - Sofás de lujo hechos a mano"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* LADO DERECHO: TEXTOS Y ESTADÍSTICAS */}
        <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
          
          {/* Etiqueta superior */}
          <span className="inline-block w-fit rounded-full border border-[#EAE6DF]/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#EAE6DF]/80 mb-6">
            El oficio Dimar
          </span>

          {/* Título Principal */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-sm">
            EL LUJO ESTÁ EN CADA <br className="hidden sm:inline" />
            DETALLE QUE NO SE VE.
          </h2>

          {/* Texto Descriptivo */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#EAE6DF]/85 font-sans uppercase tracking-wider max-w-2xl font-medium">
            ESPUMA DE ALTA DENSIDAD, RESORTES POCKET INDEPENDIENTES Y CONFECCIÓN A MEDIDA EN CADA PIEZA. SOFÁS DE LUJO HECHOS A MANO Y ENTREGADOS DIRECTO DE NUESTRA FÁBRICA, SIN INTERMEDIARIOS NI SOBREPRECIOS.
          </p>

          {/* Bloques de Estadísticas / Números */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#EAE6DF]/20 pt-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur-sm"
              >
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#EAE6DF] tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-2 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-[#EAE6DF]/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}