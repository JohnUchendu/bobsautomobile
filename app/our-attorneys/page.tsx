import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonial";
import Hero from "@/components/Hero";

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
  title: "Our Attorneys",
  description:
    "Attorneys/ Lawyers at Benfield Attorneys and Solicitors legal services in Lagos, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with Benfield Attorneys and Solicitors",
  generator: "",
  applicationName: "Benfield Attorneys and Solicitors",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Attorneys Law firm services",
    "Attorneys service",
    "Attorneys legal service ",
    "Attorneys law service ",
    "Attorneys law",
    "Attorneys or a lawyer needed for law case",
    "Attorneys for legal court case lawyer",
    "Lawyers Law firm services",
    "Lawyers service",
    "Lawyers legal service ",
    "Lawyers law service ",
    "Lawyers law",
    "Attorneys or a lawyer needed for law case",
    "Lawyers for legal court case lawyer",
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

const attorneys = [
  {
    name: "Benfield",
    office: "Principal Partner",
    image: "/our-attorneys/benfield-owner1.PNG",
    bioUrl: "/our-attorneys/benfield",
    intro:
      "Benfield Attorneys and Solicitors is a seasoned corporate lawyer with 15+ years of experience in litigation, business law, and regulatory compliance.",
  },
  
];

const OurAttorneys = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 pt-6">
          Our Attorneys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-60 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{attorney.name}</h3>
                <p className="text-gray-500">{attorney.office}</p>
                <p className="text-gray-700 text-sm mt-2">{attorney.intro}</p>
                <Link href={attorney.bioUrl} rel="noopener noreferrer">
                  <Button className="mt-4 w-full bg-blue-900">
                    Read Full Bio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Testimonials />
      <Hero />
    </div>
  );
};

export default OurAttorneys;
