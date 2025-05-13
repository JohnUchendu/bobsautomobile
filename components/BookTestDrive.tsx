'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    const message = `Hello, I would like to book a test drive.\n\nName: ${name}\nPhone: ${phone}\nCar: ${car}\nPreferred Date: ${date}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '2349138688465'; // <- Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Book a Test Drive
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="08012345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="car">Car Interested In</Label>
          <Input
            id="car"
            placeholder="G63 Mercedes Benz 2025"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <Button
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
          onClick={handleBooking}
        >
          Send Booking 
        </Button>
      </div>
    </motion.div>
  );
};

export default BookingPage;
