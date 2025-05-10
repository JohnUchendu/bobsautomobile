// app/termite/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Termite Control Services | Stop Wood Damage Today",
  description:
    "Protect your property with expert termite inspection and treatment. Safe, guaranteed solutions to eliminate termite colonies fast.",
};

export default function TermitePage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">
        Professional Termite Control & Treatment
      </h1>

      <Image
        src="/areas/termite/jpeg"
        alt="Termite"
        width={500}
        height={500}
        className="rounded mb-6"
      />

      <p className="mb-4">
        Termites silently destroy homes and buildings from the inside out. At{" "}
        <strong>DePriest Pest Control</strong>, we provide powerful termite
        treatment plans that eliminate colonies and protect your structure from
        future damage.
      </p>

      <p className="mb-4">
        Signs of termite activity include mud tubes, hollow-sounding wood, and
        discarded wings. Don’t wait until the damage is visible—our inspection
        team uses thermal imaging and bait monitoring to detect termites early.
      </p>

      <p className="mb-4">
        We use a combination of liquid soil treatments and bait stations to kill
        existing termites and block their entry. Our barrier system gives
        long-lasting protection for up to 10 years.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Our Termite Services Include:
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Pre- and post-construction termite treatment</li>
        <li>Free inspections & detailed reports</li>
        <li>Certified termite technicians</li>
        <li>Warranty-backed protection</li>
      </ul>

      <p>
        Protect your investment. Call us today and schedule your termite
        inspection.
      </p>
    </main>
  );
}
