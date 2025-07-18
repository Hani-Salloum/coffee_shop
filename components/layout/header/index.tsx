"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active path based on current URL
  useEffect(() => {
    // const pathname = router.pathname
    if (pathname.endsWith("recipes")) setActivePath("/recipes");
    else if (pathname.endsWith("categories")) setActivePath("/categories");
    else if (pathname.endsWith("ingredients")) setActivePath("/ingredients");
    else if (pathname.endsWith("cuisines")) setActivePath("/cuisines");
    else setActivePath('/')
  }, [pathname]);

  const navItems = [
    { name: "Recipes", path: "/recipes" },
    { name: "Categories", path: "/categories" },
    { name: "Ingredients", path: "/ingredients" },
    { name: "Cuisines", path: "/cuisines" },
  ];
  return (
    <header
      style={{ background: 'linear-gradient(90deg,rgba(73, 56, 49, 1) 35%, rgba(231, 219, 207, 1) 35%)' }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-30",
        className
      )}
    >
      <div
        className={cn(
          "z-50",
          isScrolled
            ? "py-3  shadow-sm"
            : "py-5"
        )}
      >
        <div className="container z-50 mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="/logo.jpg"
              width={60}
              height={60}
              alt="Recipe Logo"
              className="object-cover rounded-xl"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-full text-xl font-semibold text-primary transition-all duration-200",
                  activePath === item.path
                    ? "bg-primary text-primary-foreground"
                    : ""
                )}
                onClick={() => setActivePath(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 rounded-full bg-second text-primary backdrop-blur-sm shadow-sm cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-[99px] border-r-third border-r-2 left-0 w-[50%] h-[100vh] bg-third  z-0 md:hidden transition-all duration-300 flex flex-col justify-start items-start",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-6 py-3 rounded-full text-lg font-semibold text-primary transition-all duration-200 w-full text-center",
                activePath === item.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-white dark:hover:bg-zinc-800"
              )}
              onClick={() => {
                setActivePath(item.path);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
