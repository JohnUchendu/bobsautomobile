"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Auto Financing Made Easy | Fast Approval & Low Rates",
//   description:
//     "Get fast, affordable auto financing regardless of your credit score. Apply now with zero impact on your credit!",
// };

export default function AutoFinancingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-6 text-gray-800"
      >
        Affordable Auto Financing Tailored for You
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-lg text-center mb-8"
      >
        Whether you have good credit, bad credit, or no credit history—our
        vehicle financing options are built to get you behind the wheel with
        ease. Apply online with zero credit impact and get approved in minutes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-10"
      >
        <Button asChild size="lg" className="text-lg">
          <Link href="https://wa.me/234XXXXXXXXXX?text=I'm%20interested%20in%20auto%20financing">
            Apply Now via WhatsApp
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-green-800">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>
              Can I get car financing with bad credit?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we specialize in helping customers with bad or no credit get
              approved for auto loans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What documents are required?</AccordionTrigger>
            <AccordionContent>
              A valid ID, proof of income, and proof of residence are typically
              needed. We'll guide you through the steps.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Do I need a down payment?</AccordionTrigger>
            <AccordionContent>
              Not always. We work with lenders who offer zero-down options
              depending on your credit profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>
              How fast is the approval process?
            </AccordionTrigger>
            <AccordionContent>
              Most customers get pre-approved within minutes. Final approval and
              funding can happen within 24–48 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q5">
            <AccordionTrigger>Can I finance a used car?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We offer financing for both new and used vehicles
              across all major brands.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
