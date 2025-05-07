"use client";

import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      {children}

      <AboutUs />
      <Hero />
    </body>
  );
}
