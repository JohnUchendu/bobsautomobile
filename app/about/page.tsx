import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
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
  title: "About Benfield Attorneys and Solicitors",
  description:
    "About Benfield Attorneys and Solicitors legal services in Lagos, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with Benfield Attorneys and Solicitors",
  generator: "",
  applicationName: "Benfield Attorneys and Solicitors",
  referrer: "origin-when-cross-origin",
  keywords: [
    "About Law firm services",
    "About service",
    "About legal service ",
    "About law service ",
    "About law",
    "About a lawyer needed for law case",
    "About legal court case lawyer",
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
