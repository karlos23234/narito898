import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "TOKIO_420",
    price: 255,
    rating: 5,
    image: "/neon-tokyo-cyberpunk-anime-girl.jpg",
    badge: "🔥",
  },
  {
    id: 2,
    name: "DR.GREEN GREENSMOKE",
    price: 255,
    rating: 5,
    image: "/doctor-green-mustache-character.jpg",
    badge: "🌿",
  },
  {
    id: 3,
    name: "ԱԲՈԼԻՍԻԱՆ",
    price: 255,
    rating: 5,
    image: "/vintage-gentleman-symbol.jpg",
    badge: "👔",
  },
  {
    id: 4,
    name: "AMERIKAUS",
    price: 255,
    rating: 5,
    image: "/america-logo-black.jpg",
    badge: "🇺🇸",
  },
  {
    id: 5,
    name: "GORILLA",
    price: 255,
    rating: 5,
    image: "/gorilla-logo-yellow-black.jpg",
    badge: "🦍",
  },
  {
    id: 6,
    name: "ВИБРАТ",
    price: 255,
    rating: 5,
    image: "/abstract-vibrant-dark.jpg",
    badge: "⚡",
  },
  {
    id: 7,
    name: "SOHO LOUSHNA",
    price: 255,
    rating: 5,
    image: "/scarface-al-pacino.jpg",
    badge: "🎬",
  },
  {
    id: 8,
    name: "KANACH SOFIA",
    price: 255,
    rating: 5,
    image: "/cartoon-girl-logo.jpg",
    badge: "👧",
  },
]

export function ProductGrid() {
  return (
    <div className="bg-primary">
      <div className="mb-6 bg-primary/90 backdrop-blur-sm text-primary-foreground p-4 rounded-lg shadow-lg border-2 border-primary-foreground/20">
        <h2 className="text-2xl font-bold text-center">ТОП 5 ПРИДАЧІ ПО ОТЗЫВАМ</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
