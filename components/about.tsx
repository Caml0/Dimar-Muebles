import Image from "next/image"

const stats = [
  { value: "6+", label: "Años de oficio" },
  { value: "100%", label: "Hecho a medida" },
  { value: "Directo", label: "De fábrica" },
]

export function About() {
  return (
    <section
      id="nosotros"
      className="relative bg-[#1E120A] text-[#EAE6DF] py-16 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* FONDO DE MADERA Y CAPA OSCURA PARA LECTURA PERFECTA EN MÓVIL */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-wood.jpg"
          alt="Fondo de madera Dimar"
          fill
          className="object-cover object-center scale-105"
          priority
        />

        {/* Filtro oscuro cálido que evita que el fondo se vea pixelado o compita con el texto en celular */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F08]/85 via-[#24150C]/80 to-[#1A0F08]/90 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LADO IZQUIERDO: MARCO CIRCULAR PARA LA IMAGEN */}
        <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[#EAE6DF]/25 shadow-2xl bg-[#1A100A]">
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
          <span className="inline-block w-fit rounded-full border border-[#EAE6DF]/25 bg-white/5 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#EAE6DF]/90 mb-5">
            El oficio Dimar
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-sm">
            EL LUJO ESTÁ EN CADA <br className="hidden sm:inline" />
            DETALLE QUE NO SE VE.
          </h2>

          <p className="mt-5 text-xs sm:text-base leading-relaxed text-[#EAE6DF]/90 font-sans uppercase tracking-wider max-w-2xl font-medium">
            ESPUMA DE ALTA DENSIDAD, RESORTES POCKET INDEPENDIENTES Y CONFECCIÓN
            A MEDIDA EN CADA PIEZA. SOFÁS DE LUJO HECHOS A MANO Y ENTREGADOS
            DIRECTO DE NUESTRA FÁBRICA, SIN INTERMEDIARIOS NI SOBREPRECIOS.
          </p>

          {/* Bloques de Estadísticas / Números */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2.5 sm:gap-6 border-t border-[#EAE6DF]/20 pt-7">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start rounded-2xl bg-black/30 border border-white/10 p-3.5 sm:p-5 backdrop-blur-md"
              >
                <span className="font-serif text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1.5 text-[0.6rem] sm:text-xs font-bold uppercase tracking-wider text-[#EAE6DF]/80">
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