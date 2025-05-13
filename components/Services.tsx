'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceComponent() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Premium Services
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Auto Financing Service */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/automobile/car-financing.jpg"
              alt="Auto Financing"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Auto Financing</h2>
          <p className="text-gray-700 mb-4">
            Explore flexible financing options tailored to your budget. Our team helps you find the best deals with competitive rates.
          </p>
          <Link href="/auto-services/auto-financing" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </motion.div>

        {/* Car Detailing Service */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/automobile/car-detailing.jpeg"
              alt="Car Detailing"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Detailing</h2>
          <p className="text-gray-700 mb-4">
            Our professional car detailing services bring your vehicle back to life with exterior & interior cleaning packages.
          </p>
          <Link href="/auto-services/car-detailing" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </motion.div>

        {/* Car Sales Service */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/automobile/car-sales.jpeg"
              alt="Car Sales"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Sales</h2>
          <p className="text-gray-700 mb-4">
            Browse our wide selection of luxury cars for sale, featuring top models and competitive pricing to suit every need.
          </p>
          <Link href="/auto-services/car-sales" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </motion.div>

        {/* Car Trade-In Service */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/automobile/carsale.jpg"
              alt="Car Trade-In"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Trade-In</h2>
          <p className="text-gray-700 mb-4">
            Ready to trade in your old car? Get a fast, fair quote and put the trade-in value toward your next purchase or take the cash.
          </p>
          <Link href="/auto-services/carmain.jpg" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </motion.div>

        {/* Vehicle Servicing */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/automobile/carmain2.jpg"
              alt="Vehicle Servicing"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vehicle Servicing</h2>
          <p className="text-gray-700 mb-4">
            Keep your car in top condition with our comprehensive servicing options, including oil changes, diagnostics, and repairs.
          </p>
          <Link href="/auto-services/vehicle-servicing" className="text-blue-600 hover:underline">
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
