// app/not-found.tsx
'use client';

import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Uh-oh! This Page Has Been Exterminated
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like the page you're crawling for doesn't exist anymore.
        </p>

        {/* Pest Control Themed Image */}
        <img
          src="/rat-icon.png" // Replace with your pest image e.g. /rat-icon.png
          alt="Pest Control Icon"
          className="w-40 h-40 mb-6"
        />

        <div className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            A Little Pest Humor to Brighten Your Day
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-left text-gray-700">
            <li>"Why did the ant get fired? He was always bugging people."</li>
            <li>"Mosquitoes don’t need an appointment. They just drop in and take your blood."</li>
            <li>"I opened a pest control business — it's crawling with success!"</li>
            <li>"Never argue with a cockroach... they always bring their whole family."</li>
            <li>"Termites threw a party. The house was lit… and eaten!"</li>
          </ul>
        </div>

        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            Return to Safety (Home Page)
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
