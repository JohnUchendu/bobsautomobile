import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import React from "react";

import { Metadata } from "next";
import ClientLogos from "@/components/clients";
import OurServices from "@/components/Services";

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
  title: "About Bobs Automobile",
  description: "About Bobs Automobil services in Port Harcourt.",
  generator: "",
  applicationName: "Bobs Automobil",
  referrer: "origin-when-cross-origin",
  keywords: [
    "About Our Pest Control Services",

    "What Our Pest Control Covers",

    "Comprehensive Pest Management Solutions",

    "Expert Pest Control Services for Every Home",

    "Understanding Pest Problems and Prevention",

    "Need Pest Control? Here's How We Can Help",

    "Professional Help for Severe Pest Infestations",
  ],
  authors: [{ name: "ECA" }],
  creator: "Eagle Contractor Agency",
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
      <Testimonials />
      <ClientLogos />
      <Hero />
      <OurServices />
    </>
  );
};

export default page;
