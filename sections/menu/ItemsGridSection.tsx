"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Search, Utensils, X } from "lucide-react"
import ItemCard from "@/components/cards/ItemCard" // Reusing the existing ItemCard
import { Category } from "@/types/category"
import { getAllItems } from "@/actions/item"
import useDebounce from "@/utils/hooks/useDebounce"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Item } from "@/types/item"

interface MenuItem {
  id: string
  name: string
  image: string
  price: number
  rate: number
  categories: string[]
}

const menuItems = [
  {
    id: "1",
    name: "Espresso Blend",
    image: "/hero_img.jpeg",
    price: 4.5,
    rate: 4.8,
    categories: ["Coffee", "Hot", "Espresso"],
  },
  {
    id: "2",
    name: "Iced Latte",
    image: "/hero_img.jpeg",
    price: 6.0,
    rate: 4.7,
    categories: ["Coffee", "Cold", "Espresso"],
  },
  {
    id: "3",
    name: "Green Tea Latte",
    image: "/hero_img.jpeg",
    price: 5.5,
    rate: 4.5,
    categories: ["Tea", "Hot", "Matcha"],
  },
  {
    id: "4",
    name: "Chocolate Croissant",
    image: "/hero_img.jpeg",
    price: 3.75,
    rate: 4.6,
    categories: ["Sweets", "Pastry"],
  },
  {
    id: "5",
    name: "Cold Brew",
    image: "/hero_img.jpeg",
    price: 5.0,
    rate: 4.9,
    categories: ["Coffee", "Cold", "Brew"],
  },
  {
    id: "6",
    name: "Blueberry Muffin",
    image: "/hero_img.jpeg",
    price: 3.25,
    rate: 4.4,
    categories: ["Sweets", "Pastry"],
  },
  {
    id: "7",
    name: "Herbal Tea",
    image: "/hero_img.jpeg",
    price: 4.0,
    rate: 4.3,
    categories: ["Tea", "Hot"],
  },
  {
    id: "8",
    name: "Cappuccino",
    image: "/hero_img.jpeg",
    price: 5.25,
    rate: 4.7,
    categories: ["Coffee", "Hot", "Espresso"],
  },
  {
    id: "9",
    name: "Vegan Brownie",
    image: "/hero_img.jpeg",
    price: 4.0,
    rate: 4.6,
    categories: ["Sweets", "Vegan"],
  },
  {
    id: "10",
    name: "Americano",
    image: "/hero_img.jpeg",
    price: 4.25,
    rate: 4.5,
    categories: ["Coffee", "Hot", "Espresso"],
  },
]

const allCategories = [ 
  { id: 1, name: 'hot' },
  { id: 2, name: 'cold' },
  { id: 3, name: 'iced' },
  { id: 4, name: 'gluten free' },
  { id: 5, name: 'beverage' },
  { id: 6, name: 'dessert' },
  { id: 7, name: 'half caf' },
  { id: 8, name: 'decaf' },
]

interface Props {
  data: Array<Item>
}

export default function ItemsGridSection({ data }: Props) {
  const [ menuItems, setMenuItems ] = useState(data)
  const maxPrice = Math.max(...menuItems.map((item) => item.price))
  const minPrice = Math.min(...menuItems.map((item) => item.price))

  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 800);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [categoriesIds, setCategoriesIds] = useState([])

  const handleCategoryChange = (id: number, checked: boolean) => {
    setCategoriesIds((prevIds: any) => {
      const newIds = checked 
        ? [...(prevIds || []), id]
        : (prevIds || []).filter((i: number) => i !== id);
      
      return newIds;
    });
  }
  
  const getData = async () => {
    const res = await getAllItems()
    //@ts-ignore
    setMenuItems(res.data)

    // const res = await getAllItems({
    //   search: debouncedSearchTerm,
    //   category: categoriesIds.join(','),
    //   min_price: priceRange[0],
    //   max_price: priceRange[1],
    // })
  }

  useEffect(() => {
    getData()
  }, [debouncedSearchTerm, categoriesIds, priceRange])

  const renderFilters = () => (
    <div className="space-y-8">
      <ScrollArea>
        {/* Search Input */}
        <div className="mb-8">
          <Label htmlFor="search-menu" className="text-lg font-semibold text-primary mb-3 block">
            Search Menu
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
            <Input
              id="search-menu"
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-third bg-white text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <Label className="text-lg font-semibold text-primary mb-3 block">Categories</Label>
          <div className="grid grid-cols-2 gap-3">
            {allCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  // checked={categoriesIds.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true ? true : false)}
                  className="border-secondary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-base font-medium text-primary/80 cursor-pointer"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-8">
          <Label className="text-lg font-semibold text-primary mb-4 block">Price Range</Label>
          <Slider
            min={minPrice}
            max={maxPrice}
            step={0.25}
            value={priceRange}
            onValueChange={(value: [number, number]) => setPriceRange(value)}
            className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-third [&>span:first-child>span]:bg-secondary [&_[role=slider]]:bg-primary [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-sm"
          />
          <div className="flex justify-between text-sm text-primary/70 mt-3">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>
        </div>

        <Button
          onClick={() => {
            setSearchTerm("")
            setSelectedCategories([])
            setPriceRange([minPrice, maxPrice])
          }}
          className="w-full bg-primary hover:bg-black text-white px-6 py-3 rounded-xl transition-colors"
        >
          Reset Filters
        </Button>
        <ScrollBar className="opacity-0" orientation="vertical" />
      </ScrollArea>
    </div>
  )

  return (
    <div className="py-24 min-h-screen bg-third px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-primary text-center mb-12">Our Menu</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Desktop Filters (Hidden on Mobile) */}
          <aside className="hidden lg:block lg:col-span-1 bg-white p-8 rounded-3xl shadow-lg h-fit sticky top-28">
            <h2 className="text-3xl font-bold text-primary mb-8">Filters</h2>
            {renderFilters()}
          </aside>

          {/* Mobile Filters Trigger (Hidden on Desktop) */}
          <div className="lg:hidden mb-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full bg-primary hover:bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filter Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-sm bg-third p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-primary">Filters</h2>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-primary hover:bg-secondary/20">
                      <X className="w-6 h-6" />
                      <span className="sr-only">Close filters</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <Accordion type="multiple" className="w-full space-y-4">
                  <AccordionItem value="search" className="border-none">
                    <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline py-4">
                      Search
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                        <Input
                          id="search-menu-mobile"
                          placeholder="Search for items..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 rounded-xl border border-third bg-white text-primary focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="categories" className="border-none">
                    <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline py-4">
                      Categories
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="grid grid-cols-2 gap-3">
                        {allCategories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            {/* <Checkbox
                              id={`category-mobile-${category}`}
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={(checked) =>
                                handleCategoryChange(category, checked === true ? true : false)
                              }
                              className="border-secondary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                            /> */}
                            <Checkbox
                              id={`category-${category}`}
                              // checked={categoriesIds.includes(category.id)}
                              onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true ? true : false)}
                              className="border-secondary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                            />
                            <Label
                              htmlFor={`category-mobile-${category.name}`}
                              className="text-base font-medium text-primary/80 cursor-pointer"
                            >
                              {category.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="price-range" className="border-none">
                    <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline py-4">
                      Price Range
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <Slider
                        min={minPrice}
                        max={maxPrice}
                        step={0.25}
                        value={priceRange}
                        onValueChange={(value: [number, number]) => setPriceRange(value)}
                        className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-third [&>span:first-child>span]:bg-secondary [&_[role=slider]]:bg-primary [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-sm"
                      />
                      <div className="flex justify-between text-sm text-primary/70 mt-3">
                        <span>${priceRange[0].toFixed(2)}</span>
                        <span>${priceRange[1].toFixed(2)}</span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategories([])
                    setPriceRange([minPrice, maxPrice])
                  }}
                  className="w-full mt-8 bg-primary hover:bg-black text-white px-6 py-3 rounded-xl transition-colors"
                >
                  Reset Filters
                </Button>
              </SheetContent>
            </Sheet>
          </div>

          {/* Items Grid Section */}
          <div className="lg:col-span-3">
            {menuItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <ItemCard
                      //@ts-ignore
                      data={item}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="bg-white rounded-3xl shadow-lg p-8 text-center">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <Utensils className="w-16 h-16 text-secondary" />
                  <h2 className="text-2xl font-bold text-primary">No items found</h2>
                  <p className="text-primary/80">Try adjusting your filters or search term.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
