"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CarSales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Affordable Car Sales – Trusted Vehicles, Transparent Deals
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        Find your next ride with confidence. At our{" "}
        <strong>car sales dealership</strong>, we specialize in high-quality{" "}
        <strong>used cars</strong> that are fully inspected, road-ready, and
        priced to match your budget. Whether you're buying your first car or
        upgrading, we help you make the smart choice with affordable financing,
        trade-in options, and nationwide delivery.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        Our lot includes sedans, SUVs, trucks, and compact cars from trusted
        brands like Toyota, Honda, Ford, Lexus, and more. Every vehicle is
        tested, cleaned, and backed by a limited warranty. Need help? Our team
        of experts can guide you through vehicle history, loan approval, and
        ownership transfer.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8"
      >
        With 3+ years of experience and over 100 satisfied customers, we’re
        your go-to <strong>used car dealership</strong>. We offer fair pricing,
        no hidden fees, and flexible payment plans. Buy with peace of mind—your
        dream car is just a test drive away.
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
            <AccordionTrigger>Do you offer car financing?</AccordionTrigger>
            <AccordionContent>
              Yes. We work with multiple lenders to provide car loans, even if
              your credit isn’t perfect. Pre-approval is available online.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Are the cars inspected before sale?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Each car undergoes a multi-point inspection to ensure
              mechanical and cosmetic quality before hitting the lot.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>Can I trade in my old car?</AccordionTrigger>
            <AccordionContent>
              Yes! Bring in your old car for a free valuation. The trade-in value
              can be used toward your new vehicle purchase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              Do you deliver cars outside the city?
            </AccordionTrigger>
            <AccordionContent>
              We offer <strong>nationwide vehicle delivery</strong>. Buy from
              anywhere and get your car delivered safely to your doorstep.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
