import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Catalog } from "@/components/catalog"
import { CustomWork } from "@/components/custom-work"
import { Appointment } from "@/components/appointment"
import { SiteFooter } from "@/components/site-footer"
import { FAQ } from "@/components/faq"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <Catalog />
      <CustomWork />
      <Appointment />
      <SiteFooter />
      <FAQ/>
    </main>
  )
}
