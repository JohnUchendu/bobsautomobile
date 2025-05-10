// app/components/TopNavbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function TopNavbar() {
  return (
    <div className="w-full bg-white shadow-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap md:flex-nowrap gap-4">
        {/* Column 1: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href={"/"}>
          <Image
            src="/logos/De’PRIEST PEST CONTROL.png"
            alt="Depriest Logo"
            width={120}
            height={40}
            priority
            />
            </Link>
        </div>

        {/* Column 2: Trust Badges */}
        <div className="flex-1 flex justify-center items-center gap-3">
          <Image
            src="/logos/cac.jpeg"
            alt="Certified Badge"
            width={100}
            height={40}
          />
          <Image
            src="/logos/pcan.png"
            alt="Eco Friendly Badge"
            width={100}
            height={40}
          />
       
        </div>

        {/* Column 3: Phone Number (hidden on mobile) */}
        <div className="hidden md:flex items-center text-sm font-medium text-gray-800">
          📞{" "}
          <a href="tel:+2348034941001" className="ml-2 hover:underline">
          +2349134810580
          </a>
        </div>
      </div>
    </div>
  );
}
