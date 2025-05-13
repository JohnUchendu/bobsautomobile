"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function VehicleServicing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Reliable Vehicle Servicing & Maintenance
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        Keep your vehicle running smoothly with our expert{" "}
        <strong>car servicing</strong> and maintenance solutions. Whether it's a
        routine oil change, brake inspection, or engine check, our certified
        mechanics ensure your car stays safe and roadworthy.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        We work with all makes and models and provide transparent pricing,
        fast turnaround times, and high-quality parts. From diagnostics to
        repairs, you can count on us to treat your car like it’s our own.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8"
      >
        Our team has serviced over 2,000 vehicles in the last year alone.
        Book online or walk in for professional service with zero hassle.
        Your satisfaction—and safety—is our top priority.
      </motion.p>

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
            <AccordionTrigger>How often should I service my car?</AccordionTrigger>
            <AccordionContent>
              We recommend a full service every 5,000–7,000 km or every 3–6 months, depending on usage and vehicle type.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>Do you offer same-day servicing?</AccordionTrigger>
            <AccordionContent>
              Yes. Many of our basic maintenance services can be completed the same day. Book early to secure your slot.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>What services are included in a full check-up?</AccordionTrigger>
            <AccordionContent>
              We inspect brakes, tires, fluids, battery, engine, suspension, filters, and more. You'll receive a detailed report.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>Is there a warranty on your repairs?</AccordionTrigger>
            <AccordionContent>
              Absolutely. All parts and labor come with a 3-month limited warranty for peace of mind.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
