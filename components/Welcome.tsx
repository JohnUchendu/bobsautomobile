"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-gray-100">
      {/* Logo
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/logos/eljardslogo.png"
          alt="eljards ltd services Logo"
          width={400}
          height={400}
          className="h-24 w-auto"
        />
      </motion.div> */}

      {/* Header */}
      <motion.h1
        className="text-4xl text-gray-700 font-bold mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to Eljards Ltd Services
      </motion.h1>

      {/* */}
      <motion.p
        className="text-lg text-gray-600 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Eljards Ltd Services is your expert business
        consulting solutions to help you grow 10x smarter and faster. And trusted partner for buying, selling,
        swapping, and inspecting automobiles through
        our partnership with <strong>Cars45</strong> and <strong>Jiji</strong>. And through
        our partnership with <strong>Wisolar</strong>, we deliver reliable
        renewable energy services—empowering homes and businesses across
        Nigeria.
      </motion.p>

      {/* Dash Design */}
      <motion.div
        className="w-16 h-1 bg-black my-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-[15px] md:text-xl mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        ...empowering your drive, your business, and your energy future
      </motion.p>

      {/* Partnerships Image */}
      <motion.div
        className="flex mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src="/logos/eljardslogo.png" // replace with your combined partnerships image
          alt="Partners: Cars45, Jiji, Wisolar"
          width={30}
          height={30}
          className="mx-auto"
        />
        <Image
          src="/logos/wisolar.png" // replace with your combined partnerships image
          alt="Partners: Cars45, Jiji, Wisolar"
          width={30}
          height={30}
          className="mx-auto"
        />
        <Image
          src="/logos/cars45xjiji.jpeg" // replace with your combined partnerships image
          alt="Partners: Cars45, Jiji, Wisolar"
          width={30}
          height={30}
          className="mx-auto"
        />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-2xl text-gray-700 font-semibold">
        Experience Growth
        </p>
        <p className="text-2xl font-bold backdrop-blur-2xl bg-blue-600 border rounded-4xl p-3 text-white">
          (234) 913 868 8465
        </p>
        <p className="text-sm text-gray-500"></p>
      </motion.div>
    </div>
  );
}
