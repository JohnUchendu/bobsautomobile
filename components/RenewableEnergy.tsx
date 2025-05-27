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

const RenewableEnergy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Image
        src="/logos/eljardslogo.png" // Replace with your actual image path
          alt="Cars45, Jiji, and The Automobile Hub Partnership"
          width={100}
          height={100}
          className="object-contain"
      
      />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Renewable Energy Solutions - In partnership with Wisolar
      </h1>

      <p className="text-gray-700 text-lg text-center mb-8">
        We bring affordable solar energy to residential homes through flexible
        installment payment plans In collaboration with <strong>Wisolar</strong>
        , we are committed to accelerating the adoption of clean, renewable
        energy across communities.
      </p>
      <p>
        Our goal is to help you reduce your energy bills, minimize your carbon
        footprint, and achieve energy independence-without the upfront burden
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-8">
        <li>Free site assessment and energy audit</li>
        <li>Seamless installation and setup</li>
        <li>Certified solar equipment with warranties</li>
        <li>Flexible financing and incentive guidance</li>
      </ul>

      <div className="flex p-4 justify-center">
        <Image
          src="/logos/wisolar.png" // Replace with your actual image path
          alt="wisolar, solar panels"
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

      {/* CTA Button */}
      <div className="text-center mb-8">
        <Link href="/contact">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-400 cursor-pointer transition">
            Get Started with Stable Electricity
          </button>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>

      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>How do solar panels work?</AccordionTrigger>
            <AccordionContent>
              Solar panels convert sunlight into electricity using photovoltaic
              cells. When photons hit the cells, they generate an electric
              current that can power your home or business.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              What is the lifespan of a solar energy system?
            </AccordionTrigger>
            <AccordionContent>
              Most solar panels come with a 25-year performance warranty, and
              systems can continue producing electricity for 30+ years with
              minimal efficiency loss.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              Do I need batteries for solar power?
            </AccordionTrigger>
            <AccordionContent>
              Batteries are optional. With a grid-tied system, excess energy is
              fed back to the grid. Adding a battery bank provides backup power
              during outages and maximizes self-consumption.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              How much can I save on my electricity bill?
            </AccordionTrigger>
            <AccordionContent>
              Savings depend on system size, local electricity rates, and
              sunlight exposure. On average, homeowners see 50–90% reduction in
              their monthly bills.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
            <AccordionTrigger>
              Are there incentives or rebates available?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Many regions offer tax credits, rebates, and net-metering
              programs to lower installation costs and improve payback times.
              We’ll help you navigate available incentives.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default RenewableEnergy;
