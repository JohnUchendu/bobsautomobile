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
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl text-gray-800 mb-4"
      >
        We’ve Watched Great Ideas Fail — Not Because They Weren’t Good, But
        Because They Weren’t Guided.
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className=" pl-5 text-gray-700 mb-8 list-none"
      >
        <li>We’ve seen brilliant founders lose steam.</li>
        <li>We’ve watched promising startups vanish.</li>
        <li>
          Not from a lack of passion, but from a lack of clarity, structure, and
          execution.
        </li>
        <li>We know — because we’ve been the ones called in to fix it.</li>
      </motion.ul>
      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg  mb-8"
      >
        We’ve seen brilliant founders lose steam.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg  mb-8"
      >
        We’ve watched promising startups vanish.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg  mb-8"
      >
        Not from a lack of passion, but from a lack of clarity, structure, and
        execution.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8"
      >
        We know — because we’ve been the ones called in to fix it.
      </motion.p> */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl text-gray-800 mb-4"
      >
        Then We Stopped Watching… And Started Building with Them.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-gray-800 mb-4"
      >
        At Eljards Ltd, we don’t hand you slides full of theory. We enter the
        trenches with you. We refine your product, reframe your strategy, and
        reroute your growth path — all grounded in mind engineering and tested
        execution frameworks that have worked across industries. We don’t just
        talk strategy. We move businesses forward.
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl text-gray-800 mb-4"
      >
        Because We Know What’s at Stake.
        <p className="text-xl">
          Your dream isn’t just a business — it’s your legacy.
        </p>
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="list-none pl-5 text-gray-700 mb-8"
      >
        <li>It deserves direction.</li>
        <li>It deserves momentum.</li>
        <li>
          It deserves a team that’s just as invested in your outcome as you are.
        </li>
      </motion.ul>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl  text-gray-800 mb-4"
      >
        Here’s What We Deliver — Hands-On:
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="list-none pl-5 text-gray-700 mb-8"
      >
        <li>
          {" "}
          Product penetration for startups entering tough, competitive markets
        </li>
        <li>
          {" "}
          Product relevance for businesses navigating shifting customer needs
        </li>
        <li>
          {" "}
          Product dominance for brands ready to lead and expand their influence
        </li>
      </motion.ul>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-2xl  text-gray-800 mb-4"
      >
        Let’s Turn Your Vision Into Results.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-gray-700"
      >
        No fluff. No vague advice. Just battle-tested growth systems built to
        take your business 10x farther — and faster.
      </motion.p>
      {/* CTA Button */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-gray-700"
      >
        Ready to scale?  <Link href="/contact" className="text-blue-600"> Let’s make it happen, together. </Link>
       
          
        
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-xl text-gray-800 pt-5 mb-4"
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
