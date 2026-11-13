"use client"

import { useState } from "react"
import Image from "next/image" // 1. Importamos la imagen
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma la fabricación y entrega de un mueble?",
    answer:
      "El tiempo estimado de fabricación para piezas a medida es de 15 a 20 días hábiles. Cuidamos cada detalle desde la estructura de madera hasta el tapizado final para entregarte una pieza impecable.",
  },
  {
    question: "¿Realizan envíos a todo el país?",
    answer:
      "¡Sí! Hacemos envíos a nivel nacional con empresas de transporte especializadas en muebles para garantizar que tu pedido llegue en perfectas condiciones hasta la puerta de tu hogar.",
  },
  {
    question: "¿Qué garantía ofrecen en los muebles Dimar?",
    answer:
      "Ofrecemos garantía directa de fábrica en la estructura interna, resorteado y confección. Utilizamos espumas de alta densidad y materiales de primera calidad diseñados para durar toda una vida.",
  },
  {
    question: "¿Puedo personalizar las medidas y el tipo de tela?",
    answer:
      "Por supuesto. Al ser fabricantes directos, adaptamos el mueble a las dimensiones exactas de tu espacio. Además, puedes elegir entre telas antifluido, pet friendly, linos, cueros o telas tipo bouclé.",
  },
  {
    question: "¿Cómo es el proceso y la forma de pago?",
    answer:
      "Iniciamos la producción con un anticipo del 50% al momento de definir el diseño y los materiales. El 50% restante se cancela cuando tu mueble esté terminado y listo para la entrega.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
      className="relative overflow-hidden py-20 lg:py-28 px-6 lg:px-12 border-t border-border/40"
    >
      {/* CAPA 1: IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Question.jpg"
          alt="Fondo Preguntas Frecuentes Dimar"
          fill
          className="object-cover object-center"
          priority
        />
        {/* CAPA 2: OSCURECEDOR SUTIL (Ajusta bg-black/40 o bg-white/60 según si quieres fondo oscuro o claro) */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* CAPA 3: CONTENIDO PRINCIPAL (z-10 para estar por encima de la foto) */}
      <div className="relative z-10 mx-auto max-w-4xl">
        
        {/* ENCABEZADO */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90 drop-shadow-sm">
            Resuelve tus dudas
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white drop-shadow-md leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium drop-shadow-sm">
            Todo lo que necesitas saber sobre nuestro proceso artesanal, envíos, garantías y confección a medida.
          </p>
        </div>

        {/* LISTA DE PREGUNTAS (ACORDEÓN CON ESTILO VIDRIO ESMERILADO) */}
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/30 bg-white/85 backdrop-blur-md shadow-lg transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#3E2723] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 inline-flex size-9 items-center justify-center rounded-full border border-white/40 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#3E2723]" : "bg-[#3E2723]/80"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#5D4037] font-medium leading-relaxed border-t border-[#3E2723]/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ