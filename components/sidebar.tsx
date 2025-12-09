"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const categoryOptions: Record<string, string[]> = {
  КАТЕГОРИИ: ["Все", "0.5g", "1.0g", "1.5+"],
  ГОРОД: ["Ереван", "Малатиа-Себастиа", "Комитас", "Арабкир", "Зейтун", "Аван", "Нор Норк", "Мараш", "Шенгавит"],
  ЦЕНА: ["Все", "До 8500", "10000-18000", "21000+"],
  "ТИП ТОВАРА": ["Все", "Новое", "Б/У", "Эксклюзив"],
}

const categories = ["КАТЕГОРИИ", "ГОРОД", "ЦЕНА", "ТИП ТОВАРА"]

export function Sidebar() {
  const [openCategories, setOpenCategories] = useState<string[]>(["КАТЕГОРИИ"])

  const toggleCategory = (category: string) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((c) => c !== category))
    } else {
      setOpenCategories([...openCategories, category])
    }
  }

  return (
    <aside className="hidden lg:block w-64 backdrop-blur-sm border-r border-border p-6 space-y-2 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto bg-slate-300">
      {/* Christmas Tree Decoration */}
      <div className="mb-6 text-center">
        <div className="text-6xl mb-2">🎄</div>
        <div className="flex justify-center gap-2 mb-2">
          <span className="text-2xl">🎁</span>
          <span className="text-2xl">⭐</span>
          <span className="text-2xl">🔔</span>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category} className="border-b border-border pb-2">
          <Button
            variant="ghost"
            className="w-full justify-between hover:bg-primary/10 text-foreground font-semibold"
            onClick={() => toggleCategory(category)}
          >
            {category}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openCategories.includes(category) ? "rotate-180" : ""}`}
            />
          </Button>
          {openCategories.includes(category) && (
            <div className="mt-2 ml-4 space-y-1 text-sm text-muted-foreground">
              {categoryOptions[category]?.map((option) => (
                <div key={option} className="hover:text-foreground cursor-pointer py-1">
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  )
}
