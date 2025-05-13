"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedPhone = phone.replace(/\D/g, ""); // Remove non-numeric chars

    // Basic E.164 format validation: starts with country code, 10-14 digits
    const isValidPhone = /^([1-9]\d{9,14})$/.test(cleanedPhone);

    if (!isValidPhone) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");

    const text = `Name: ${name}%0APhone: ${cleanedPhone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border"
    >
      <motion.h2
        className="text-2xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Contact Us
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          type="tel"
          placeholder=" Number (e.g. 2349012345678)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {error && (
          <p className="text-sm text-red-600 -mt-2">{error}</p>
        )}

        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Send 
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
