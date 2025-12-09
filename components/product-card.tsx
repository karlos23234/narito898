import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image: string
  badge: string
}

export function ProductCard({ product }: { product: Product }) {
  const colors = [
    "bg-yellow-400",
    "bg-lime-500",
    "bg-emerald-600",
    "bg-slate-900",
    "bg-yellow-300",
    "bg-red-700",
    "bg-neutral-700",
    "bg-cyan-400",
  ]

  const cardColor = colors[product.id % colors.length]

  return (
    <Card
      className={`${cardColor} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-card-foreground/20 group cursor-pointer`}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 text-3xl">{product.badge}</div>
        </div>

        <div className="p-4 bg-card-foreground/90 backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-2 text-card text-balance">{product.name}</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-card">От {product.price} ₽</span>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
