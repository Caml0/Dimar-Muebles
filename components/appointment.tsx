"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Check } from "lucide-react"

export function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Capturamos los datos directamente de los campos existentes
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const date = formData.get("date") as string
    const message = formData.get("message") as string

    // Construimos el mensaje para WhatsApp
    const textoWhatsApp =
      `Hola Dimar Muebles, quiero agendar una cita.%0A%0A` +
      `📌 *Nombre:* ${encodeURIComponent(name)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(phone)}%0A` +
      `📅 *Fecha preferida:* ${encodeURIComponent(date)}%0A` +
      `🛋 *Detalles:* ${encodeURIComponent(message || "Sin detalles adicionales")}`

    // Abrimos el chat de WhatsApp
    window.open(`https://wa.me/573154905437?text=${textoWhatsApp}`, "_blank")

    // Muestra la pantalla de agradecimiento original
    setSubmitted(true)
  }

  return (
    <section id="agendar" className="relative bg-warm-texture grain">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-primary text-primary-foreground shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left copy */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                <Calendar className="size-3.5" />
                Agendar cita
              </span>
              <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                Visita nuestra fábrica o recíbenos en casa.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/75">
                Reserva una cita sin compromiso. Te asesoramos con muestras de
                tela, medidas y presupuesto en minutos.
              </p>
            </div>

            {/* Right form */}
            <div className="bg-card p-8 text-card-foreground sm:p-12 lg:p-14">
              {submitted ? (
                <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                    ¡Cita recibida!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Gracias. Nuestro equipo te contactará muy pronto para
                    confirmar los detalles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-primary">
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(000) 000-0000"
                        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-sm font-medium text-primary">
                        Fecha preferida
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">
                      ¿Qué buscas? (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                  >
                    Confirmar cita
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
