import { MarketplaceHeader } from "@/components/marketplace-header"
import { ProductGrid } from "@/components/product-grid"
import { Sidebar } from "@/components/sidebar"
import { Snowfall } from "@/components/snowfall"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Snowfall />

      {/* Christmas decorations background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/30 to-transparent" />
      </div>

      <MarketplaceHeader />

      <div className="relative z-10 flex">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 text-card bg-primary">
          <ProductGrid />
        </main>
      </div>
    </div>
  )
}
