"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logos/eljardslogo.png"
            alt="eljards logo"
            className="h-10 w-auto object-contain"
          />

          <span className="text-xl font-bold text-gray-900 hidden sm:inline">
            EL-jards
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Nav Items (centered) */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavItems />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <NavItems isMobile />
        </div>
      )}
    </nav>
  );
}

function NavItems({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col gap-3" : "flex-row gap-6"
      } font-medium text-gray-800 text-sm items-center`}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <Dropdown
        title="Services"
        items={[
          {
            label: "Business Consulting",
            href: "/services/business-consulting",
          },
          { label: "Renewable Energy", href: "/services/renewable-energy" },
          { label: "Automobile Hub", href: "/services/automobile-hub" },
        ]}
        isMobile={isMobile}
      />
      <li>
        <Link href="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}

function Dropdown({
  title,
  items,
  isMobile = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  isMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`relative ${isMobile ? "" : "group"} cursor-pointer`}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <span
        onClick={() => isMobile && setOpen((prev) => !prev)}
        className="flex items-center gap-1"
      >
        {title} ▾
      </span>

      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute md:absolute bg-white border rounded-md shadow-md mt-1 md:min-w-[180px] z-50 ${
          isMobile ? "ml-4 mt-2 relative border-none shadow-none" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item.href} className="hover:bg-gray-100 px-4 py-2">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
