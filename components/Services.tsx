
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "rat control",
    image: "/areas/rat.jpg",
    description:
      "Expert ant eradication for commercial and residential locations",
    bioUrl: "pest-control-services/rat",
  },
  {
    title: "cockroach control",
    image: "/areas/cockroach.jpeg",
    description:
      "Cockroach infestation solutions for commercial and residents",
    bioUrl: "pest-control-services/cockroach",
  },
  {
    title: "termite control",
    image: "/areas/termite.jpeg",
    description:
      "Termite control solutions for homes and offices.",
    bioUrl: "pest-control-services/termite",
  },
  {
    title: "mosquito control",
    image: "/areas/mosquito.jpeg",
    description:
      "Mosquito control solutions for homes and businesses",
    bioUrl: "pest-control-services/mosquito",
  },
  
];

export default function OurServices() {
  return (
    <div
      className="py-20 px-8"
      style={{
        backgroundImage: "url(/professional-pest-control-services-in-delhi-min-840x562.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-1/3">
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={150}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <Link href={service.bioUrl} rel="noopener noreferrer ">
                <Button className="mt-4 w-1/2 text-[9px]" >
                 why companies choose us?
                </Button>
              </Link>
            </div>
            <div> 
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
