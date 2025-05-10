import React from "react";
import type { Metadata } from "next";

import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";
import Welcome from "@/components/Welcome";
import Testimonials from "../components/Testimonial";


export const metadata: Metadata = {
  alternates: {
    canonical: 'https://acme.com',
    // languages: {
    //   'en-US': '/en-US',
    //   'en-GB': '/en-GB',
    // },
  },
  openGraph: {
    images: '/og-image.png',
  },
  title: "Depriest Pest Control",
  description: "Pest Control in Port Harcourt ",
  generator: '',
  applicationName: 'Depriest',
  referrer: 'origin-when-cross-origin',
  keywords: ["Depriest", "Pest control"],
  authors: [{ name: "ECA"}   ],
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
