'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logos/eljardslogo.png" alt="eljards logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-gray-900 hidden sm:inline">EL-jards Ltd Services</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Items (aligned right) */}
        <motion.div
          className="hidden md:flex flex-1 justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <NavItems />
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <NavItems isMobile />
        </div>
      )}
    </motion.nav>
  );
}

function NavItems({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col gap-3" : "flex-row gap-10"
      } font-semibold text-lg text-gray-800 items-center`}
    >
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="/">Home</Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="/about">About</Link>
      </motion.li>
      <Dropdown
        title="Services"
        items={[
          { label: "Renewable Energy", href: "/services/renewable-energy" },
          { label: "Automobile", href: "/services/automobile-hub" },
          { label: "Business-Consulting", href: "/services/business-consulting" },
         
        ]}
        isMobile={isMobile}
      />
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="/testimonials">Testimonials</Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link href="/contact">Contact</Link>
      </motion.li>
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
    <motion.li
      className={`relative ${isMobile ? "" : "group"} cursor-pointer`}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
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
          <motion.li
            key={item.href}
            className="hover:bg-gray-100 px-4 py-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={item.href}>{item.label}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.li>
  );
}
