"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CarDetailing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-4"
      >
        Professional Car Detailing Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg text-center mb-8"
      >
        Bring back that showroom shine with our premium{" "}
        <strong>car detailing services</strong>. Whether you need a quick
        refresh or a full deep clean, we offer everything from{" "}
        <strong>interior detailing</strong> to <strong>paint correction</strong>{" "}
        and <strong>ceramic coating</strong>. Our expert technicians use
        high-quality products and tools to give your vehicle the care it
        deserves.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        We offer packages tailored to your needs—exterior washes, wax and
        polish, clay bar treatments, stain removal, leather conditioning, and
        engine bay cleaning. Choose between express services or full detailing
        for the ultimate experience. Book online and enjoy affordable pricing
        with fast turnaround times.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8"
      >
        Whether you’re getting ready to sell your car or just want it looking
        its best, we’ll make it shine inside and out. We serve individuals,
        dealerships, and fleet companies across the region.
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
            <AccordionTrigger>What does car detailing include?</AccordionTrigger>
            <AccordionContent>
              It includes a full clean and restoration of your car’s interior and
              exterior—washing, waxing, polishing, vacuuming, steam cleaning,
              leather treatment, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              How long does a full car detail take?
            </AccordionTrigger>
            <AccordionContent>
              A complete car detail typically takes between 2 to 4 hours,
              depending on your vehicle’s condition and the selected service
              package.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>Do you offer mobile car detailing?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer mobile car detailing at your home or office. Simply
              select the mobile option during booking and we’ll come to you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>How often should I get my car detailed?</AccordionTrigger>
            <AccordionContent>
              We recommend getting your car detailed every 3 to 6 months to
              maintain its appearance and protect your paint and interior
              materials.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>Is ceramic coating worth it?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Ceramic coating provides long-lasting protection for
              your paint, repels dirt and water, and gives your car a glossy,
              high-end finish.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
