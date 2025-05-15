"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AutomobileService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex p-4 justify-center">
        <Image
          src="/logos/cars45xjiji.jpeg" // Replace with your actual image path
          alt="Cars45, Jiji, and The Automobile Hub Partnership"
          width={100}
          height={100}
          className="object-contain"
        />
        <Image
          src="/logos/eljardslogo.png" // Replace with your actual image path
          alt="Cars45, Jiji, and The Automobile Hub Partnership"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-4"
      >
        The Automobile Hub
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg text-center mb-8"
      >
        We simplify your vehicle journey. In partnership with{" "}
        <strong>Cars45</strong> and <strong>Jiji</strong>, Eljards Ltd offers a
        seamless way to <strong>buy, sell, inspect, or trade</strong> used
        vehicles across Nigeria.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="list-disc pl-5 text-gray-700 mb-8"
      >
        <li>On-the-spot vehicle inspection</li>
        <li>Hassle-free paperwork</li>
        <li>Verified listings for peace of mind</li>
        <li>Trade-in and swap options available</li>
      </motion.ul>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-center mb-8"
      >
        <Link href="/contact">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-400 cursor-pointer transition">
            Get Started with Your Vehicle Today
          </button>
        </Link>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-2xl font-semibold text-gray-800 mb-4"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>
              Do you inspect all used cars listed?
            </AccordionTrigger>
            <AccordionContent>
              Yes, every car listed goes through a thorough inspection to verify
              its condition. Our experts assess key systems to ensure safety and
              reliability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Can I swap my current car for another?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Our swap service lets you trade in your current
              vehicle and upgrade to a different one without the usual stress
              and delays.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>Are your listings verified?</AccordionTrigger>
            <AccordionContent>
              Yes, we only list cars that have passed documentation checks and
              meet our quality criteria. You’re buying with peace of mind.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              How long does the inspection process take?
            </AccordionTrigger>
            <AccordionContent>
              Vehicle inspections typically take 30–60 minutes depending on the
              make and model. We ensure you get accurate results fast.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>
              Is there a warranty or buyer protection?
            </AccordionTrigger>
            <AccordionContent>
              While we don’t offer manufacturer warranties, we do provide full
              transparency and a trusted buying process backed by our partners
              Cars45 and Jiji.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default AutomobileService;
