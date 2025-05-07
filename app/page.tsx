import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";

import Welcome from "@/components/Welcome";
// import Solution from "@/components/Solution";

import React from "react";
import Testimonials from "../components/Testimonial";
import BookingForm from "../components/BookingForm";

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
  title: "Benfield Attorneys and Solicitors",
  description: "Top law firm  in Lagos ",
  generator: '',
  applicationName: 'Benfield Attorneys and Solicitors',
  referrer: 'origin-when-cross-origin',
  keywords: ["Benfield Attorneys and Solicitors", "Gratias Deo Chambers"],
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
      <BookingForm/>
      <OurServices />
      <Testimonials />
      {/* <Solution /> */}
      <ClientLogos />
    </div>
  );
};

export default page;
