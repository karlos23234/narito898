import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
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
