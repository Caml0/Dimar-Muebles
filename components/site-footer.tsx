import { Mail, MessageCircle, Phone } from "lucide-react"

// Icono personalizado de Instagram (vectorial directo para evitar fallos de librerías)
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const columns = [
  {
    title: "Explorar",
    links: [
      { name: "Inicio", href: "#" },
      { name: "Catálogo", href: "#catalogo" },
      { name: "Trabajos a medida", href: "#agendar" },
      { name: "Nosotros", href: "#nosotros" },
    ],
  },
  {
    title: "Colecciones",
    links: [
      { name: "Salas", href: "#catalogo" },
      { name: "Comedores", href: "#catalogo" },
      { name: "Camas", href: "#catalogo" },
    ],
  },
]

// Lista de redes sociales y vías de contacto directo
const socialLinks = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/diimarmuebles?igsh=MXQyZDMyNGVvajJmdA==",
    label: "Instagram de Dimar Muebles",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/573154905437",
    label: "WhatsApp directo",
  },
  {
    icon: Mail,
    href: "mailto:diimarmuebles@gmail.com",
    label: "Enviar correo",
  },
  {
    icon: Phone,
    href: "tel:+573154905437",
    label: "Llamar por teléfono",
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Dimar
              </span>
              <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-primary-foreground/60">
                Muebles
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Fabricamos sus salas, comedores y camas de calidad, hechas a su
              comodidad y adaptados a usted en Colombia. Directo de fábrica.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    aria-label={item.label}
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
              Contacto
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/80">
              <li>Lun — Vie · 9:00am — 6:00pm</li>
              <li>
                <a
                  href="mailto:diimarmuebles@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  diimarmuebles@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+573154905437"
                  className="transition-colors hover:text-accent"
                >
                  +57 315 490 5437
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573154905437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent transition-colors hover:text-primary-foreground"
                >
                  Escribir por WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/12 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Dimar Muebles. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Hecho a mano en fábrica.
          </p>
        </div>
      </div>
    </footer>
  )
}
