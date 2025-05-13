import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/Contact";
import React from "react";

import { Metadata } from "next";


export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  title: "Contact Bobs Automobile",
  description: "Contact Bobs Automobile services in Port Harcourt",
  generator: "",
  applicationName: "Bobs Automobile",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Contact car dealership services",

    "Contact vehicle service",

    "Contact auto repair shop",

    "Contact car maintenance service",

    "Contact certified mechanics",

    "Contact for car diagnostics",

    "Book car servicing online",

    "Schedule auto maintenance appointment",

    "Contact vehicle inspection center",

    "Contact for brake and oil change",

    "Contact a car dealer near me",

    "Contact auto sales expert",

    "Book a test drive appointment",

    "Contact for new car purchase",

    "Contact used car dealership",

    "Schedule car showroom visit",

    "Contact for affordable car deals",

    "Contact car dealer for trade-in",

    "Book appointment to buy a car",

    "Contact for luxury car consultation    ",
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
     <ContactForm/>
      <Testimonials />
    </div>
  );
};

export default page;
