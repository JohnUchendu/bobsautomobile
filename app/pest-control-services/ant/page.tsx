// app/ant/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Ant Control Services | Get Rid of Ants Fast",
  description:
    "We eliminate ant infestations using proven, long-lasting methods. Safe for homes, restaurants, and offices. Book now for same-day service.",
};

export default function AntPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">Reliable Ant Control Services</h1>

      <Image
        src="/areas/ant.jpeg"
        alt="Ant"
        width={500}
        height={500}
        className="rounded mb-6"
      />

      <p className="mb-4">
        Ants may be tiny, but they can cause big problems if left unchecked.{" "}
        <strong>DePriest Pest Control</strong> provides fast and effective ant
        control services for homes, offices, and restaurants.
      </p>

      <p className="mb-4">
        Whether you're dealing with sugar ants, carpenter ants, or fire ants, we
        use targeted baits and barriers to wipe out entire colonies. Our
        treatments are safe, odorless, and designed to stop re-infestation.
      </p>

      <p className="mb-4">
        Ants invade kitchens, contaminate food, and build nests in walls and
        foundations. We perform a detailed inspection to identify their entry
        points and eliminate their trails.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Why Our Ant Treatments Work:
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Pet- and child-safe products</li>
        <li>Quick results that last</li>
        <li>No need to leave your home</li>
        <li>Ongoing prevention plans</li>
      </ul>

      <p>
        Don’t let ants take over your space. Call us today to schedule your ant
        control service!
      </p>
    </main>
  );
}
