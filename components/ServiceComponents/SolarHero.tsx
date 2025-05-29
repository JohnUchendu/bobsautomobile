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
    image: "/areas/solarpanel.webp",
    title: "Power cuts are killing your productivity. And your budget.",
    description: "You deserve energy you can trust — not overpriced diesel, blackouts, or noisy generators. We install reliable solar systems that save you money, reduce stress, and keep your business (or home) running 24/7.",
    buttonText: " Book a free energy assessment today.",
    link: "/contact",
  },
];

export default function SolarHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full h-screen relative">
      <CarouselContent>
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <CarouselItem key={index} className="relative w-full h-screen">
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
                      <Button className="bg-blue-700 text-gray-300 hover:bg-blue-200">
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
