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

    const cleanedPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters

    // Check if it starts with 0 and has 11 digits
    const isValidNigerianNumber = /^0\d{10}$/.test(cleanedPhone);

    if (!isValidNigerianNumber) {
      setError("Please enter a valid Nigerian phone number starting with 0.");
      return;
    }

    setError("");

    // Convert to international format: 08012345678 → 2348012345678
    const internationalPhone = 2349138688465;

    const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${internationalPhone}?text=${text}`;
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
          placeholder="Phone Number (e.g. 08012345678)"
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
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Send
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
