// app/not-found.tsx
'use client';

import React from 'react';
import { FaCarCrash } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Whoops! You've Taken a Wrong Turn
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for might have been towed or never existed.
        </p>

        {/* Automobile Themed Icon */}
        <FaCarCrash size={160} className="text-gray-400 mb-6" />

        <div className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            A Few Jokes to Refuel Your Mood
          </h3>
          <ul className="list-disc pl-6 space-y-4 text-left text-gray-700">
            <li>"Why did the car apply for a job? It wanted to quit being exhausted."</li>
            <li>"I used to be a taxi driver, but I got tired of people driving me crazy."</li>
            <li>"My car and I are in a committed relationship. It drives me crazy."</li>
            <li>"Why did the tire go to therapy? It couldn’t handle the pressure."</li>
            <li>"Cars don’t get lost. They just take scenic detours!"</li>
          </ul>
        </div>

        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            Back to the Garage (Home Page)
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
