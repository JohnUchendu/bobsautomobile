import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";

import React from "react";

import ClientLogos from "@/components/Clients";
import OurServices from "@/components/ServicesComponent";

import { Metadata } from "next";
import WhatTheySay from "@/components/WhatTheySay";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://eljardsltdservices.com/contact",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    title: "About Eljards Ltd | Powering Your Home, Business & Drive",
    description:
      "From solar installations to car upgrades and business growth, Eljards Ltd is your trusted partner in transformation.",
    url: "https://eljardsltdservices.com/contact",
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
  title: "About Eljards Ltd Services",
  description: "About Eljards Ltd Services in Nigeria",
  generator: "",
  applicationName: "Eljards Ltd Services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "About car dealership services",
    "About affordable renewable energy solution",
    "About solar panels and batteries",
    "About business consulting ",
    "About car sales and inspection with cars 45 x jiji",
    "Contact a car dealer near me",
  ],
  authors: [{ name: "ECA" }],
  creator: "ECA",
  publisher: "ECA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const page = () => {
  return (
    <>
      <div className="pt-10">
        <AboutUs />
      </div>
      <WhatTheySay />
      <ClientLogos />
      <Hero />
      <OurServices />
    </>
  );
};

export default page;
