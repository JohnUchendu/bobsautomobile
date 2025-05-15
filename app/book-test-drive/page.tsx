import React from "react";
import BookingPage from "@/components/BookTestDrive";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://eljardsltdservices.com/book-test-drive",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    title: "Book A Test Drive with Eljards Ltd ",
    description:
      "From solar installations to car upgrades and business growth, Eljards Ltd is your trusted partner in transformation.",
    url: "https://eljardsltdservices.com/book-test-drive",
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
  title: "Book A Test Drive with Eljards Ltd Services",
  description: "Book your test drive with Eljards Ltd Services in Nigeria",
  generator: "",
  applicationName: "Eljards Ltd Services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "book a test drive with",
    "How to test drive a car you want to buy",
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
    <div>
      <BookingPage />
    </div>
  );
};

export default page;
