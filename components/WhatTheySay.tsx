"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Bobs Automobile transformed my old Toyota into a machine that feels brand new. Their attention to detail and timely delivery are unmatched. Definitely my go-to auto shop from now on.",
    company: "Johnson U., Lagos",
  },
  {
    quote:
      "We use Bobs Automobile for our entire fleet and have never had an issue. Their diagnostic precision and customer service are top tier. Highly recommended for corporate vehicle maintenance.",
    company: "Fleet Manager, XYZ Logistics",
  },
  {
    quote:
      "The team at Bobs is professional, friendly, and extremely efficient. They helped me fix my brake system faster than any service center I’ve used. Honest pricing too!",
    company: "Faith O., Port Harcourt",
  },
];

const WhatTheySay = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            <p className="text-sm text-gray-500 font-medium">
              — {testimonial.company}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatTheySay;
