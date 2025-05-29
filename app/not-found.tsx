// app/not-found.tsx
"use client";

import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Whoops! You've Taken a Wrong Turn
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for might have been moved or never existed.
        </p>

        {/* Automobile Themed Icon */}
        {/* <FaCarCrash size={160} className="text-gray-400 mb-6" /> */}
      </div>
    </div>
  );
};

export default NotFound;
