import React from "react";
import type { Metadata } from "next";

import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";
import Welcome from "@/components/Welcome";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://acme.com",
    // languages: {
    //   'en-US': '/en-US',
    //   'en-GB': '/en-GB',
    // },
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Bobs Automobile",
  description: "Luxury Car Dealership in Port Harcourt ",
  generator: "",
  applicationName: "bobs automobile",
  referrer: "origin-when-cross-origin",
  keywords: ["bobs automobile", "car dealership"],
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
      <Testimonials />
      <ClientLogos />
    </div>
  );
};

export default page;
