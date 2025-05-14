"use client";

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
        {/* Renewable Energy Solutions */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/areas/wisolarroof.png"
              alt="Renewable Energy"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Renewable Energy Solutions
          </h2>
          <p className="text-gray-700 mb-4">
            Harness clean and sustainable energy with our solar and hybrid power
            systems. We provide design, installation, and maintenance services
            for homes and businesses.
          </p>
          <Link
            href="/services/renewable-energy"
            className="text-blue-600 hover:underline"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Automobile Hub */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/areas/carstand.jpeg"
              alt="Automobile Hub"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Automobile Hub
          </h2>
          <p className="text-gray-700 mb-4">
            From car sales and financing to detailing and servicing, our
            all-in-one automobile hub offers quality vehicles and expert care
            for your ride.
          </p>
          <Link
            href="/services/automobile-hub"
            className="text-blue-600 hover:underline"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Business Consulting */}
        <motion.div
          className="service-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="mb-4">
            <img
              src="/areas/business.jpeg"
              alt="Business Consulting"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Business Consulting
          </h2>
          <p className="text-gray-700 mb-4">
            Empower your business with expert consulting services. We help
            startups and SMEs scale with strategic planning, financial advisory,
            and operational support.
          </p>
          <Link
            href="/services/business-consulting"
            className="text-blue-600 hover:underline"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
