import OurServices from "@/components/Services";
import Testimonials from "@/components/Testimonial";
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
  title: "Law Firm Services | Benfield Attorneys and Solicitors",
  description: "Law firm services with Benfield Attorneys and Solicitors ",
  generator: "",
  applicationName: "Benfield Attorneys and Solicitors",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Benfield Attorneys and Solicitors",
    "Law firm services",
    "Corporate",
    "Commercial",
    "Energy and Natural Resources",
    "Telecommunication",
    "Aviation",
    "Taxation",
    "Commercial Litigation",
    "Alternative Dispute Resolution",
    "Project Finance",
    "Shipping and Maritime",
    "Foreign Investment",
    "Banking and Finance",
    "Real Estate",
    "Labour / Employment",
    "Intellectual Property",
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

const pages = () => {
  return (
    <div>
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default pages;
