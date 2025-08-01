"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import SocialLinks from "./social-links"
import NewsletterForm from "./newsletter-form"
import FooterLinksCard from "./footer-links-card"

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Our Team", href: "/team" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  return (
    <footer className={cn("relative overflow-hidden py-10 px-5 md:py-14 bg-primary", className)}>
      <div className="container mx-auto relative z-10 px-5 md:bg-secondary rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Left quarter - Logo and slogan */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
                <Image src={'/logo.jpg'} className="rounded-xl" alt="Recipeno logo" width={90} height={90} />
            </Link>
            <p className="text-third text-lg font-semibold leading-relaxed mt-4">
              Discover delicious recipes from around the world. Cook with confidence and explore new flavors every day.
            </p>
          </div>

          {/* Middle two quarters - Navigation links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8 pt-4">
            <FooterLinksCard
              links={navigationLinks.slice(0, 3)}
              title='Quick Links'
            />
            <FooterLinksCard
              links={navigationLinks.slice(3)}
              title='Resources'
            />
          </div>

        </div>

      </div>
    </footer>
  )
}

