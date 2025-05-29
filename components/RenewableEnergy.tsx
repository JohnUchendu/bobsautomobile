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
import SolarHero from "./ServiceComponents/SolarHero";

const RenewableEnergy = () => {
  return (
    <>
      <SolarHero />
      <div className="max-w-4xl mx-auto px-4 py-12 ">
        <h1 className="text-xl text-gray-800 mb-4">
          We Know the Frustration of Unreliable Power. We Lived It Too.
        </h1>
        <p className="text-gray-700 mb-8">
          Before we offered solutions, we faced the same problem — days ruined
          by outages, nights in darkness, and bills that kept rising with
          nothing to show for it. We know what it feels like to depend on a
          system that keeps failing.
        </p>
        <h1 className="text-xl  text-gray-800 mb-4">
          But Everything Changed When We Took Control of Our Own Energy.
        </h1>
        <p>
          In partnership with Wisolar, we discovered the freedom of solar energy
          — not just for us, but for everyday families who couldn’t afford large
          upfront costs. We found a smarter way: flexible installment plans,
          certified solar gear, and long-term savings that actually made sense.
        </p>
          <p>
            Our goal is to help you reduce your energy bills, minimize your
            carbon footprint, and achieve energy independence-without the
            upfront burden
          </p>
        <br />
        <h1 className="text-xl   text-gray-800 mb-4 pt-5">
          This Isn’t Just About Power. It’s About Peace of Mind.
        </h1>
        <p>
          You deserve to wake up with lights on and no noise from generators.
        </p>
        <p>
          You deserve to protect your family, your finances, and the planet.
        </p>
        <p>
          And most of all — you deserve energy independence that feels simple
          and achievable.
        </p>
        <h2 className="text-xl text-gray-800 mb-4 pt-5">
          Here’s How We Make It Happen For You:
        </h2>
        <ul className="list-disc pl-5 text-gray-700 mb-8">
          <li>Free site assessment and energy audit</li>
          <li>Seamless installation and setup</li>
          <li>Certified solar equipment with warranties</li>
          <li>Flexible financing and incentive guidance</li>
        </ul>
        <h2 className="text-xl  text-gray-800 mb-4">
          Let’s Bring Power Back Where It Belongs — In Your Hands.
        </h2>
        <div className="flex p-4 justify-center">
          <Image
            src="/logos/wisolar.png" // Replace with your actual image path
            alt="wisolar, solar panels"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src="/logos/eljardslogo.png" // Replace with your actual image path
            alt="Cars45, Jiji, and The Automobile Hub Partnership"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <p>
            No noise. No stress. No false promises. Just reliable energy — built
            for your life. <Link href="/contact" className="text-blue-500">Join the solar movement. </Link>
            Let’s light up your future, together.
          </p>
        </div>

        <h2 className="text-xl text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How do solar panels work?</AccordionTrigger>
              <AccordionContent>
                Solar panels convert sunlight into electricity using
                photovoltaic cells. When photons hit the cells, they generate an
                electric current that can power your home or business.
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
                Batteries are optional. With a grid-tied system, excess energy
                is fed back to the grid. Adding a battery bank provides backup
                power during outages and maximizes self-consumption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>
                How much can I save on my electricity bill?
              </AccordionTrigger>
              <AccordionContent>
                Savings depend on system size, local electricity rates, and
                sunlight exposure. On average, homeowners see 50–90% reduction
                in their monthly bills.
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
    </>
  );
};

export default RenewableEnergy;
