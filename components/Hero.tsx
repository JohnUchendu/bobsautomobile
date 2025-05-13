"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/automobile/showroom.jpg",
    title: "Explore the Latest Models",
    description: "Drive innovation with our wide range of brand-new vehicles at unbeatable prices.",
    buttonText: "Browse More",
    link: "/about",
  },
  {
    image: "/automobile/carmaintenance.jpg",
    title: "Trusted Auto Repair Services",
    description: "Certified technicians ready to keep your vehicle running like new.",
    buttonText: "Book a Service",
    link: "/services",
  },
  {
    image: "/automobile/testdrive.jpg",
    title: "Schedule a Test Drive",
    description: "Experience comfort, power, and performance before you make the choice.",
    buttonText: "Test Drive Now",
    link: "/book-test-drive",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full h-[500px] relative">
      <CarouselContent>
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <CarouselItem key={index} className="relative w-full h-[500px]">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center px-10 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-lg">
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-lg mb-6">{slide.description}</p>
                    <Link href={slide.link} passHref>
                      <Button className="bg-blue-700 border-2 text-black hover:bg-blue-200">
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ) : null
          )}
        </AnimatePresence>
      </CarouselContent>
    </Carousel>
  );
}
