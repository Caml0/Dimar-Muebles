"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowUpRight,
  X,
  MessageCircle,
  Users,
  Layers,
  ShieldCheck,
  Ruler,
  Sparkles,
} from "lucide-react"

// Lista de categorías para los botones de filtro
const categories = ["Todos", "Salas", "Comedores", "Camas", "Sofas"]

// Estructura de cada variante opcional (solo pones los campos que cambian)
interface ProductVariant {
  label: string
  img: string
  description?: string
  puestos?: string
  telas?: string
  madera?: string
  medidas?: string
}

// Estructura de tipos de datos de cada producto
interface Product {
  name: string
  type: string
  price: string
  img: string
  description: string
  puestos: string
  telas: string
  madera: string
  medidas: string
  variants?: ProductVariant[]
}

const products: Product[] = [
  {
    name: "Comedor Faraón",
    type: "Comedores",
    price: "Cotización a medida",
    img: "/Comedor-faraon.png",
    description:
      "Diseñado para ser el centro de atención de tu hogar. El Comedor Faraón combina elegancia contemporánea con un confort excepcional en cada silla.",
    puestos: "4 puestos",
    telas: "Lino nacional, antifluido o Pet Friendly",
    madera: "Estructura en madera de Roble seco inmunizado",
    medidas: "Mesa: base circular de 1.60m x 0.90m · Altura estándar",
  },
  {
    name: "Sala Santorini",
    type: "Salas",
    price: "Cotización a medida",
    img: "/Sala-santorini.jpg",
    description:
      "Líneas orgánicas y máxima comodidad. Fabricada con espumas de alta densidad que garantizan confort prolongado sin deformarse; incluye 3 cojines decorativos.",
    puestos: "5 a 6 personas (Seccional L)",
    telas: "Bouclé, Lino de alto tráfico o Microfibra",
    madera: "Pino inmunizado con refuerzos de estructura",
    medidas: "2.40m x 1.70m (Chaise Longue) con patas de 10cm",
  },
  {
    name: "Cama Nube",
    type: "Camas",
    price: "Cotización a medida",
    img: "/cama-nube.png",
    description:
      "Diseño acolchado tipo nube que aporta calidez y una sensación de descanso inigualable a tu dormitorio.",
    puestos: "Tamaño Queen / Matrimonial",
    telas: "Velvet ultra suave, Chenille o Lino",
    madera: "Bastidor metálico y estructura en madera inmunizada",
    medidas: "Para colchón de 1.40m x 1.90m o 1.60m x 1.90m",
  },
  {
    name: "Sala Relax",
    type: "Salas",
    price: "Cotización a medida",
    img: "/sala-relax.jpg",
    description:
      "El equilibrio perfecto entre ergonomía y elegancia. Espacios amplios y mullidos para compartir en familia; incluye 3 cojines decorativos.",
    puestos: "4 a 5 personas",
    telas: "Antifluido premium, Lino o Microfibra",
    madera: "Estructura de madera maciza seleccionada",
    medidas: "2.20m x 1.50m",
  },
  {
    name: "Sala Ana",
    type: "Salas",
    price: "Cotización a medida",
    img: "/sala-ana.jpeg",
    description:
      "Diseño clásico renovado con acabados suaves y estilizados. Cotiza las medidas exactas para tu hogar.",
    puestos: "3 a 4 personas",
    telas: "A elección según catálogo de telas",
    madera: "Madera maciza inmunizada",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Carlota en espuma",
    type: "Salas",
    price: "Cotización a medida",
    img: "/carlota-espuma.jpeg",
    description:
      "Estructura en espuma de alta densidad moldeada para máximo confort y flexibilidad en espacios modernos; incluye 3 cojines decorativos.",
    puestos: "3 personas",
    telas: "A elección (Linos, Velvet, Antifluidos)",
    madera: "Base de soporte reforzada",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Sala Francesa",
    type: "Salas",
    price: "Cotización a medida",
    img: "/sala-francesa.jpeg",
    description:
      "Detalles artesanales inspirados en el diseño clásico con toques de sofisticación contemporánea.",
    puestos: "5 personas",
    telas: "Lino, Velvet o Microfibra",
    madera: "Cedro / Roble seleccionado",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Sala Totty",
    type: "Salas",
    price: "Cotización a medida",
    img: "/sala-totty.jpg",
    description:
      "Estilo versátil y compacto ideal para maximizar el confort en áreas de estar familiares.",
    puestos: "3 personas",
    telas: "Telas antifluido y Pet Friendly disponibles",
    madera: "Pino inmunizado de alta resistencia",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Sala kio 3pts",
    type: "Salas",
    price: "Cotización a medida",
    img: "/sala-kio3pts.jpeg",
    description:
      "Set de 3 puestos optimizado para brindar soporte postural y estética limpia en tu sala principal.",
    puestos: "3 puestos independientes / modulares",
    telas: "Amplia variedad de texturas y colores",
    madera: "Estructura robusta en madera maciza",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Cama Imperial",
    type: "Camas",
    price: "Cotización a medida",
    img: "/cama-imperial140.jpeg",
    description:
      "Cabezal majestuoso con acabados finos y presencia imponente para la habitación principal.",
    puestos: "Medida 1.40m (Matrimonial)",
    telas: "Velvet, Lino o Cuero sintético Premium",
    madera: "Estructura reforzada anti-ruidos",
    medidas: "1.40m x 1.90m (Personalizable a Queen/King)",
  },
  {
    name: "Sala Oslo",
    type: "Salas",
    price: "Cotización a medida",
    img: "/Sala-oslo.jpg",
    description:
      "Inspiración nórdica de líneas limpias y elegancia atemporal, pensada para dar amplitud y confort moderno a tu sala.",
    puestos: "3 a 4 personas",
    telas: "Lino estructurado, Bouclé o Antifluido",
    madera: "Madera maciza inmunizada con patas estilizadas",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Sofa Palma",
    type: "Sofas",
    price: "Cotización a medida",
    img: "/sofa-palma.jpg",
    description:
      "Sofá de silueta acogedora y proporciones equilibradas, ideal para salas principales, estudios o apartamentos contemporáneos.",
    puestos: "3 puestos",
    telas: "Antifluido, Lino nacional o Microfibra suave",
    madera: "Estructura en madera de pino/roble inmunizado",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Sala Ferrini",
    type: "Salas",
    price: "Cotización a medida",
    img: "/sala-ferrini.jpeg",
    description:
      "Sofisticación y presencia en cada detalle. Ofrece un asiento profundo y ergonómico con acabados de alta tapicería.",
    puestos: "4 a 5 personas",
    telas: "Velvet, Lino importado o Cuero sintético Premium",
    madera: "Estructura reforzada en madera maciza seleccionada",
    medidas: "Fabricación a la medida de tu espacio",
  },
  {
    name: "Comedor Playero",
    type: "Comedores",
    price: "Cotización a medida",
    img: "/Playero-CM.jpg",
    description:
      "Diseñado para ser el lugar de encuentro en tu hogar, cenas y reuniones memorables.",
    puestos: "6 puestos",
    telas: "Antifluido o Pet Friendly",
    madera: "Estructura en madera de Roble seco inmunizado con comedor marmolizado",
    medidas: "Mesa: base circular de 1.60m x 0.90m · Altura estándar",
  },
  {
    name: "Comedor Móscu",
    type: "Comedores",
    price: "Cotización a medida",
    img: "/Mosu-CM.jpg",
    description:
      "Creado con un diseño imperial e imponente, haciendo de tu hogar algo totalmente diferente. Disponible en varias configuraciones de base y tapicería.",
    puestos: "4 puestos",
    telas: "Antifluido o Pet Friendly",
    madera: "Estructura en madera de Roble seco inmunizado con comedor marmolizado",
    medidas: "Mesa: base rectangular de 1.60m x 0.90m · Altura estándar",
    // VARIANTES DEL COMEDOR MÓSCU (Cambia cada "img" por el nombre exacto de tu foto en public/)
    variants: [
      {
        label: "Base Rectangular",
        img: "/Mosu-CM.jpg",
        puestos: "4 puestos",
        medidas: "Mesa: base rectangular · Altura estándar",
      },
      {
        label: "4 puestos a rayas · Base redonda",
        img: "/Moscu-redondo.jpg",
        puestos: "4 puestos",
        telas: "Tela a rayas antifluido o Pet Friendly",
        medidas: "Mesa: base redonda · Altura estándar",
      },
      {
        label: "4 puestos a rayas con butaco",
        img: "/Butaca-CM.jpg",
        puestos: "4 puestos (sillas + butaco)",
        telas: "Tela a rayas antifluido o Pet Friendly",
        medidas: "Mesa rectangular con banca/butaco a medida",
      },
    ],
  },
  {
    name: "Comedor Princesa",
    type: "Comedores",
    price: "Cotización a medida",
    img: "/Princesa-CM.jpg",
    description:
      "La elegancia y la humildad es algo que se encuentra en el comedor Princesa.",
    puestos: "4 puestos",
    telas: "Antifluido o Pet Friendly",
    madera: "Estructura en madera de Roble seco inmunizado con comedor marmolizado",
    medidas: "Mesa: base redonda de 1.60m x 0.90m · Altura estándar",
  },
]

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [activeVariantIndex, setActiveVariantIndex] = useState(0)

  const handleOpenProduct = (product: Product) => {
    setActiveProduct(product)
    setActiveVariantIndex(0)
  }

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter(
          (product) =>
            product.type.toLowerCase() === selectedCategory.toLowerCase()
        )

  const whatsappNumber = "573154905437"

  // Contador por categoría para mostrar en los botones
  const getCategoryCount = (category: string) => {
    if (category === "Todos") return products.length
    return products.filter(
      (p) => p.type.toLowerCase() === category.toLowerCase()
    ).length
  }

  // Datos activos dentro del modal (si tiene variante seleccionada, usa sus datos)
  const currentVariant = activeProduct?.variants?.[activeVariantIndex]
  const displayImg = currentVariant?.img || activeProduct?.img || "/placeholder.svg"
  const displayDescription =
    currentVariant?.description || activeProduct?.description || ""
  const displayPuestos = currentVariant?.puestos || activeProduct?.puestos || ""
  const displayTelas = currentVariant?.telas || activeProduct?.telas || ""
  const displayMadera = currentVariant?.madera || activeProduct?.madera || ""
  const displayMedidas = currentVariant?.medidas || activeProduct?.medidas || ""
  const whatsappProductLabel = currentVariant
    ? `${activeProduct?.name} (${currentVariant.label})`
    : activeProduct?.name || ""

  return (
    <section id="catalogo" className="relative bg-warm-texture">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Encabezado */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <Sparkles className="size-3.5" />
              Catálogo Exclusivo
            </span>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold leading-tight text-primary text-balance sm:text-4xl lg:text-[2.75rem]">
              Piezas pensadas para durar toda una vida.
            </h2>
          </div>
          <a
            href="#agendar"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Solicitar asesoría personalizada
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* BARRA DE FILTROS / CATEGORÍAS CON CONTADOR */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-b border-border/60 pb-6">
          {categories.map((category) => {
            const isActive = selectedCategory === category
            const count = getCategoryCount(category)
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-secondary text-primary"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* REJILLA DE PRODUCTOS FILTRADOS */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.name}
              onClick={() => handleOpenProduct(product)}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl"
            >
              {/* Contenedor de imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={product.img || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradiente sutil inferior para resaltar etiquetas */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent opacity-80" />

                {/* Etiqueta izquierda: Categoría */}
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                  {product.type}
                </span>

                {/* Etiqueta derecha: Acción o cantidad de diseños */}
                <span className="absolute top-4 right-4 rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-accent">
                  {product.variants && product.variants.length > 1
                    ? `${product.variants.length} diseños`
                    : "Ver ficha"}
                </span>

                {/* Etiqueta inferior: Capacidad rápida */}
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-medium text-white drop-shadow">
                  <Users className="size-3.5 text-white/90" />
                  {product.puestos}
                </span>
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="flex flex-1 items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary transition-colors group-hover:text-accent">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-1">
                    {product.telas}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
                    {product.price}
                  </div>
                </div>
                <span className="shrink-0 inline-flex size-11 items-center justify-center rounded-full border border-border bg-secondary/40 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* MODAL / VENTANA FLOTANTE (VISTA COMPLETA)  */}
      {/* ========================================== */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-card border border-border shadow-2xl max-h-[92vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar X */}
            <button
              onClick={() => setActiveProduct(null)}
              aria-label="Cerrar ventana"
              className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black"
            >
              <X className="size-5" />
            </button>

            {/* Lado Izquierdo: Imagen COMPLETA sin recortes (object-contain) */}
            <div className="relative w-full md:w-[52%] bg-[#F4F0E8] flex flex-col items-center justify-center p-4 sm:p-6 shrink-0 border-b md:border-b-0 md:border-r border-border/60">
              <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
                <Image
                  src={displayImg}
                  alt={whatsappProductLabel}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="mt-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {currentVariant
                  ? currentVariant.label
                  : "Vista completa · Fabricación personalizada"}
              </span>
            </div>

            {/* Lado Derecho: Información detallada */}
            <div className="p-6 sm:p-8 md:w-[48%] overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {activeProduct.type}
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">
                    · Directo de fábrica
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-primary">
                  {activeProduct.name}
                </h3>
                <p className="mt-1 text-base font-bold text-accent">
                  {activeProduct.price}
                </p>

                {/* SELECTOR DE VARIANTES (Solo aparece si el mueble tiene variantes) */}
                {activeProduct.variants && activeProduct.variants.length > 1 && (
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2.5">
                      Elige un diseño ({activeProduct.variants.length} opciones):
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.variants.map((variant, idx) => {
                        const isSelected = idx === activeVariantIndex
                        return (
                          <button
                            key={variant.label}
                            type="button"
                            onClick={() => setActiveVariantIndex(idx)}
                            className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all border ${
                              isSelected
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-secondary/50 text-primary border-border hover:border-primary/50"
                            }`}
                          >
                            {variant.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {displayDescription}
                </p>

                {/* Cuadrícula de Especificaciones */}
                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-border/60 pt-5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-3">
                    <Users className="size-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Capacidad / Tamaño
                      </p>
                      <p className="text-muted-foreground mt-0.5">
                        {displayPuestos}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-3">
                    <Layers className="size-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Telas disponibles
                      </p>
                      <p className="text-muted-foreground mt-0.5">
                        {displayTelas}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-3">
                    <ShieldCheck className="size-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Estructura y madera
                      </p>
                      <p className="text-muted-foreground mt-0.5">
                        {displayMadera}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-3">
                    <Ruler className="size-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Medidas
                      </p>
                      <p className="text-muted-foreground mt-0.5">
                        {displayMedidas}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp Directo */}
              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Dimar%20Muebles,%20me%20gustaría%20cotizar%20el%20diseño:%20${encodeURIComponent(
                    whatsappProductLabel
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="size-4 fill-white text-[#25D366]" />
                  Cotizar este mueble por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}