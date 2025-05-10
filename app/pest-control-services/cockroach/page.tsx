// app/cockroach/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Cockroach Control Services | Eliminate Roaches Today",
  description:
    "Fast and effective cockroach pest control. We get rid of roaches with safe, long-lasting treatments for homes and businesses.",
};

export default function CockroachPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">
        Cockroach Pest Control Experts
      </h1>

      <Image
        src="/areas/cockroach.jpeg"
        alt="Cockroach"
        width={500}
        height={500}
        className="rounded mb-6"
      />

      <p className="mb-4">
        Cockroaches are among the most stubborn and disgusting pests found in
        homes and businesses. At <strong>DePriest Pest Control</strong>, we offer
        professional cockroach removal services that target infestations at
        their source.
      </p>

      <p className="mb-4">
        Roaches multiply quickly and hide in dark, moist places like kitchens,
        drains, and behind appliances. They carry bacteria like salmonella and
        E. coli, posing serious health risks, especially in food prep areas.
      </p>

      <p className="mb-4">
        Our team uses advanced gel baits, insect growth regulators, and residual
        sprays to kill roaches and stop their life cycle. We identify nesting
        areas and seal entry points to keep them from coming back.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Why Choose Our Roach Control?
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Eco-friendly, safe for pets and kids</li>
        <li>Fast-response treatment options</li>
        <li>Customized commercial & residential solutions</li>
        <li>No more late-night roach sightings!</li>
      </ul>

      <p>
        Contact us today for a free inspection and enjoy a roach-free home in no
        time.
      </p>
    </main>
  );
}
