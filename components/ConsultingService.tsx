"use client"

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

const ConsultingService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-center">
        <Image
          src="/images/partnership-logos.png" // Replace with your actual image path
          alt="Cars45, Jiji, and The Automobile Hub Partnership"
          width={600}
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
        Business Consultancy – 10x Your Growth
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg text-center mb-8"
      >
        Unlock your business’s full potential. At Eljards Ltd, we help startups
        and established brands achieve product-market fit, maximize
        profitability, and scale fast. Using <strong>mind engineering</strong>{" "}
        and proven growth frameworks, we go beyond strategy—we execute.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="list-disc pl-5 text-gray-700"
      >
        <li>Launch with market-ready product positioning</li>
        <li>Stay relevant in changing customer environments</li>
        <li>Dominate your category with a proven plan</li>
      </motion.ul>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        <strong>The Automobile Hub – In Partnership with Cars45 & Jiji:</strong>{" "}
        We provide a seamless platform to inspect, buy, sell, and swap used cars
        with confidence. Whether you’re upgrading your vehicle or exploring the
        pre-owned market, our partnerships with Cars45 and Jiji ensure you
        access vetted listings, expert inspections, and secure transactions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8"
      >
        <strong>Our offerings include:</strong>
        <br />
        • On-the-spot vehicle inspection
        <br />
        • Hassle-free documentation
        <br />
        • Trade-in and swap options
        <br />• Verified listings for buyers and sellers
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-center"
      >
        <Link href="/get-started">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
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

export default ConsultingService;
