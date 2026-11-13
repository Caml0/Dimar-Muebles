import Image from "next/image"
import { Ruler, Palette, Truck } from "lucide-react"

const steps = [
  {
    icon: Ruler,
    title: "Medidas exactas",
    text: "Diseñamos cada pieza según el espacio y las dimensiones de tu hogar.",
  },
  {
    icon: Palette,
    title: "Telas y acabados",
    text: "Eliges color, textura y firmeza. Tú decides cómo se ve y se siente.",
  },
  {
    icon: Truck,
    title: "Directo de fábrica",
    text: "Producimos y entregamos sin intermediarios ni sobreprecios.",
  },
]

export function CustomWork() {
  return (
    <section
      id="a-medida"
      className="relative min-h-[750px] w-full overflow-hidden bg-[#D8CFC4] py-16 lg:py-24 px-6 lg:px-12 flex items-center"
    >
      {/* 1. IMAGEN DE FONDO COMPLETA */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ceramic-work2.jpg"
          alt="Trabajos a medida Dimar"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Capa sutil de oscurecimiento para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. MARCA / LOGO SUPERIOR IZQUIERDO */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-10 flex items-center gap-2 text-white drop-shadow-md">
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest uppercase">
          Dimar
        </span>
      </div>

      {/* 3. ESTRUCTURA PRINCIPAL DE 2 COLUMNAS */}
      <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center pt-12 lg:pt-0">
        
        {/* LADO IZQUIERDO: IMAGEN "PIEZA ÚNICA" CON ETIQUETA FLOTANTE */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border-2 border-white/60 shadow-2xl">
              <Image
                src="/custom-work.png"
                alt="Sofá seccional hecho a medida - Pieza única"
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Etiqueta inferior */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/60 bg-white/90 backdrop-blur-md px-6 py-2.5 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3E2723]">
                Hecho a mano · Pieza única
              </p>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: CUADRO CON MARCO DE LÍNEAS BLANCAS Y DIFUMINADO */}
        <div className="lg:col-span-7 w-full mt-6 lg:mt-0">
          <div className="rounded-3xl border-2 border-white/80 bg-white/20 backdrop-blur-md p-6 sm:p-10 shadow-2xl text-foreground">
            
            {/* Encabezado */}
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-sm">
              Trabajos a medida
            </span>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
              Si lo puedes imaginar, lo confeccionamos para ti.
            </h2>
            <p className="mt-3 text-xs sm:text-sm lg:text-base leading-relaxed text-white/95 font-medium drop-shadow-sm">
              Cada proyecto a medida nace de una conversación. Trabajamos contigo
              desde el primer boceto hasta la entrega, cuidando cada costura.
            </p>

            {/* Las 3 Tarjetas dentro del cuadro */}
            <div className="mt-6 flex flex-col gap-3.5">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/40 bg-white/85 p-4 sm:p-5 shadow-sm backdrop-blur-sm text-primary transition-all duration-300 hover:bg-white"
                >
                  <span className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-[#3E2723] text-white shadow-sm">
                    <step.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#3E2723]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-[#5D4037] font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}