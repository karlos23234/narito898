import { Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function MarketplaceHeader() {
  return (
    <header className="sticky top-0 z-40 shadow-lg border-b-4 border-accent-foreground/20 bg-ring">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between gap-4 items-end">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-accent-foreground rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎄</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-accent-foreground tracking-tight">Pervi Rams</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md md:max-w-2xl relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ПОИСК"
                className="pl-10 h-12 bg-primary text-primary-foreground placeholder:text-primary-foreground/70 border-2 border-primary-foreground/20 rounded-full"
              />
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-4 md:px-6 bg-primary hover:bg-primary/90 text-primary-foreground relative"
                >
                  <User className="h-5 w-5 md:mr-2" />
                  <span className="hidden md:inline">ANUYUMS</span>
                  <span className="ml-2 px-2 py-0.5 bg-accent-foreground text-accent text-xs font-semibold rounded-full">
                    admin
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem className="cursor-pointer">Профиль</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Поддержка</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex items-center gap-4 md:gap-6 text-accent-foreground flex-wrap">
          <Button
            variant="ghost"
            className="text-accent-foreground hover:text-accent-foreground/80 hover:bg-accent-foreground/10 text-sm md:text-base"
          >
            ПОДДЕРЖИВАТЬ
          </Button>
          <Button
            variant="ghost"
            className="text-accent-foreground hover:text-accent-foreground/80 hover:bg-accent-foreground/10 text-sm md:text-base"
          >
            МАГАЗИНЫ
          </Button>
          <Button
            variant="ghost"
            className="text-accent-foreground hover:text-accent-foreground/80 hover:bg-accent-foreground/10 text-sm md:text-base"
          >
            АРБИТРАЖ
          </Button>
          <Button
            variant="ghost"
            className="text-accent-foreground hover:text-accent-foreground/80 hover:bg-accent-foreground/10 text-sm md:text-base"
          >
            О НАС
          </Button>
          <div className="ml-auto text-sm font-semibold">1 DASH = $51.64 | 1941563 AMD</div>
        </nav>
      </div>
    </header>
  )
}
