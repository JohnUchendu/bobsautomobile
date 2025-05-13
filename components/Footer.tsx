'use client';

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Logo & Quick Links */}
        <motion.div variants={fadeIn} custom={0}>
          <div className="mb-4">
            <Image
              src="/logos/bobsautomobilelogo.png"
              alt="Bob's Automobile Services"
              width={150}
              height={40}
            />
          </div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* Vehicle Services */}
        <motion.div variants={fadeIn} custom={1}>
          <h4 className="text-lg font-semibold mb-3">Vehicle Services</h4>
          <ul className="space-y-2">
            <li><a href="/auto-services/car-sales" className="hover:text-white">Car Sales</a></li>
            <li><a href="/auto-services/car-detailing" className="hover:text-white">Car Detailing</a></li>
            <li><a href="/auto-services/car-repairs" className="hover:text-white">Repairs & Maintenance</a></li>
            <li><a href="/auto-services/auto-financing" className="hover:text-white">Auto Financing</a></li>
            <li><a href="/auto-services/car-trade-in" className="hover:text-white">Trade-In Services</a></li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div variants={fadeIn} custom={2}>
          <h4 className="text-lg font-semibold mb-3">Customer Support</h4>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/appointments" className="hover:text-white">Book an Appointment</a></li>
          </ul>
        </motion.div>

        {/* Connect With Us */}
        <motion.div variants={fadeIn} custom={3}>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook width={20} height={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram width={20} height={20} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Twitter width={20} height={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin width={20} height={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 py-6 divide-y md:divide-y-0 md:divide-x divide-gray-700 gap-4 md:gap-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Phone */}
        <div className="flex items-center gap-2 px-4">
          <Phone size={18} />
          <span>+2349134810580</span>
        </div>
        {/* Email */}
        <div className="flex items-center gap-2 px-4">
          <Mail size={18} />
          <span>support@bobsautomobile.com</span>
        </div>
        {/* Address */}
        <div className="flex items-center gap-2 px-4">
          <MapPin size={18} />
          <span>Port Harcourt 500102, Rivers, Nigeria</span>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="text-center text-xs text-gray-500 pb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Bob's Automobile Services. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
