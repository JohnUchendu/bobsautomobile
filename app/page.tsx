import React from "react";
import type { Metadata } from "next";

import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/Clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/ServicesComponent";
import Welcome from "@/components/Welcome";
import WhatTheySay from "@/components/WhatTheySay";


export const metadata: Metadata = {
  alternates: {
    canonical: "https://eljardsltdservices.com",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    title: "Eljards Ltd | Powering Your Home, Business & Drive",
    description:
      "From solar installations to car upgrades and business growth, Eljards Ltd is your trusted partner in transformation.",
    url: "https://eljardsltdservices.com",
    siteName: "Eljards Ltd Services",
    images: [
      {
        url: "/logos/eljardslogo.png",
        width: 800,
        height: 600,
        alt: "Eljards Ltd Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  title:
    "Eljards Ltd Services | Solar Energy, Used Cars & Business Consulting in Nigeria",
  description:
    "Empowering Nigerians with clean energy, reliable car transactions, and strategic business growth. Discover how Eljards Ltd transforms lives and industries.",
  generator: "",
  applicationName: " Eljards Ltd Services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Eljards Ltd Services",
    "solar energy Nigeria",
    "buy used cars Nigeria",
    "business consulting Nigeria",
    "WiSolar Nigeria",
    "Cars45 Nigeria",
    "Jiji Nigeria",
  ],
  authors: [{ name: "ECA" }],
  creator: " ECA",
  publisher: " ECA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />

      <OurServices />
     <WhatTheySay />
      <ClientLogos />
    </div>
  );
};

export default page;
