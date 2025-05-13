'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 p-12 px-4 md:px-10 rounded-lg shadow-md max-w-6xl mx-auto mt-10"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/logos/bobsautomobilelogo.png"
            alt="Automobile showroom"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">About Us</h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            Your Trusted Automotive Partner
          </h3>
          <p className="text-gray-700 mb-4">
            Welcome to AutoDrive Motors – where excellence meets performance.
            We specialize in high-quality vehicles, seamless car-buying
            experiences, and nationwide delivery.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is simple: connect you with the car you love, whether
            it's brand-new, certified pre-owned, or a luxury import.
          </p>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mt-6 mb-6">
            <div className="bg-white shadow-sm rounded-md p-4">
              <h4 className="text-xl font-semibold text-green-600">10+</h4>
              <p className="text-gray-600">Years of automotive excellence</p>
            </div>
            <div className="bg-white shadow-sm rounded-md p-4">
              <h4 className="text-xl font-semibold text-green-600">1000+</h4>
              <p className="text-gray-600">Satisfied customers</p>
            </div>
            <div className="bg-white shadow-sm rounded-md p-4">
              <h4 className="text-xl font-semibold text-green-600">Nationwide</h4>
              <p className="text-gray-600">Vehicle delivery</p>
            </div>
          </div>

          <Link href="/book-test-drive">
            <button className="bg-blue-800 border-2 text-white px-6 py-2 rounded hover:bg-blue-200 transition">
              Claim Free Test Drive
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
