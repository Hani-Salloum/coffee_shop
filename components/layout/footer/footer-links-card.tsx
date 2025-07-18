"use client";

import type React from "react";
import Link from "next/link";

interface FooterLinksCardProps {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

export default function FooterLinksCard({
  title,
  links,
}: FooterLinksCardProps) {
  return (
    <div className="rounded-2xl p-5 text-center">
      <h3 className="text-2xl font-semibold text-third mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-3 list-none text-center">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-third hover:text-primary  transition-all duration-200 text-lg"
            >
              {/* <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover:bg-primary mr-2 transition-all duration-200"></span> */}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
