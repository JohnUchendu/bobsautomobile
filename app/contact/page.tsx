
import ContactForm from "@/components/Contact";
import React from "react";
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
    title: "Contact Eljards Ltd | Powering Your Home, Business & Drive",
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
  title: "Contact Eljards Ltd Services",
  description: "Contact Eljards Ltd Services in Nigeria",
  generator: "",
  applicationName: "Eljards Ltd Services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Contact car dealership services",

    "Contact vehicle service",

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
    <div className="pt-25">
      <ContactForm />
     <WhatTheySay/>
    </div>
  );
};

export default page;
