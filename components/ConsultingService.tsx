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

const ConsultingService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-center">
        <Image
          src="/logos/eljardslogo.png" // Replace with your actual image path
          alt="Business consulting"
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
        className="list-disc pl-5 text-gray-700 mb-8"
      >
        We ensure
        <li>Product penetration for startups entering competitive markets</li>
        <li>Product relevance in dynamic customer environments</li>
        <li>Product dominance for established brands aiming for leadership</li>
      </motion.ul>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-center"
      >
        <Link href="/get-started">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-8">
            10x Your Business
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
              Do you analyze each client's business before consulting?
            </AccordionTrigger>
            <AccordionContent>
              Yes, every engagement starts with a thorough audit of your
              business model, market position, and operational challenges. This
              enables us to deliver strategic solutions rooted in real data.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Can you help pivot or reposition my business?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Whether you're shifting to a new market or rebranding
              your offerings, we guide the transformation with proven frameworks
              and market-tested strategies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              Is your strategy advice tailored or generic?
            </AccordionTrigger>
            <AccordionContent>
              All our recommendations are tailored. We don’t believe in
              one-size-fits-all. Our consulting is customized to your industry,
              goals, and current business lifecycle stage.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              How long does a typical consulting engagement take?
            </AccordionTrigger>
            <AccordionContent>
              Engagements vary based on scope, but most clients see measurable
              results within 4–8 weeks. We work in sprints to deliver quick wins
              and long-term clarity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>
              Is there a guarantee on results?
            </AccordionTrigger>
            <AccordionContent>
              While we don’t promise unrealistic outcomes, our process is
              results-driven and performance-based. We align our success with
              your growth through KPIs and milestone tracking.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default ConsultingService;
