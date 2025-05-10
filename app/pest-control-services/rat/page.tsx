// app/rat/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Rat Control Services | Professional Rat Removal",
  description:
    "Get expert rat control and removal services for homes and businesses. Protect your property with our safe and effective pest solutions.",
};

export default function RatControlPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">
        Expert Rat Control & Removal Services
      </h1>

      <Image
        src="/areas/rat.jpg"
        alt="Rat"
        width={500}
        height={500}
        className="rounded mb-6 object-contain"
      />

      <p className="mb-4">
        Rats are more than just a nuisance—they’re dangerous pests that can
        cause serious health problems and structural damage. At{" "}
        <strong>DePriest Pest Control</strong>, we specialize in effective rat
        control services for both residential and commercial properties.
      </p>

      <p className="mb-4">
        Our licensed pest control technicians use advanced techniques to
        identify nesting areas, entry points, and food sources. From live
        trapping to baiting and exclusion, we offer safe, eco-friendly solutions
        that eliminate rats and prevent future infestations.
      </p>

      <p className="mb-4">
        Signs of a rat problem include gnaw marks, droppings, scratching noises,
        and foul odors. If you suspect you have a rat infestation, don’t wait.
        Rats reproduce quickly and can spread diseases like leptospirosis and
        salmonella.
      </p>

      <p className="mb-4">
        We offer same-day inspections, humane treatment methods, and guaranteed
        results. With years of experience and trusted service, we’re your go-to
        experts for rat removal in your area.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>24/7 Emergency Response</li>
        <li>Affordable & Transparent Pricing</li>
        <li>Safe for Kids & Pets</li>
        <li>Long-Term Prevention Plans</li>
      </ul>

      <p>
        Call us today or book your free inspection online. Let’s get those rats
        out—for good.
      </p>
    </main>
  );
}
