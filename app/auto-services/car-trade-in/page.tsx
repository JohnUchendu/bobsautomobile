"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CarTradeIn() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Trade In Your Car for the Best Value
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        Ready to upgrade your ride? Our <strong>car trade-in</strong> service
        makes it fast and easy to exchange your current vehicle for a newer
        model. Whether you're downsizing, upgrading, or just exploring your
        options, we’ll help you get the most value for your trade-in.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-700 text-lg mb-6"
      >
        We offer fair and transparent <strong>vehicle appraisals</strong> based
        on real market data. No pressure, no gimmicks—just an honest assessment
        of your car’s worth. We accept all makes and models, and you can apply
        the trade-in amount directly toward your next car purchase or take the
        cash value instead.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8"
      >
        With over 1,000 successful trades completed, our customers trust us to
        deliver the highest payouts and smoothest process. Book your appraisal
        online or visit us in person for a same-day quote.
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
            <AccordionTrigger>How do I trade in my car?</AccordionTrigger>
            <AccordionContent>
              Just bring in your vehicle for a quick inspection. We’ll give you an
              instant trade-in offer that you can accept on the spot or use later.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Can I trade in a car that’s not fully paid off?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We’ll work with your lender to pay off the remaining balance
              and apply any equity to your next car purchase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>What documents do I need?</AccordionTrigger>
            <AccordionContent>
              Bring your vehicle title (or loan info), registration, driver’s
              license, and any service records for a faster process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>Can I get a quote online?</AccordionTrigger>
            <AccordionContent>
              Yes. Use our free online tool to get an estimated trade-in value
              within minutes, based on your car’s make, model, year, and
              condition.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
