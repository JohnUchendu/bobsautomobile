// app/mosquito/page.tsx

import Image from "next/image";

export const metadata = {
  title: "Mosquito Control Services | Safe Outdoor Protection",
  description:
    "Get rid of mosquitoes with our targeted fogging and larvicide treatments. Protect your family from bites and diseases today.",
};

export default function MosquitoPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">
        Effective Mosquito Control & Prevention
      </h1>

      <Image
        src="/areas/mosquito.jpeg"
        alt="Mosquito"
        width={500}
        height={500}
        className="rounded mb-6"
      />

      <p className="mb-4">
        Tired of itchy mosquito bites and sleepless nights?{" "}
        <strong>DePriest Pest Control</strong> offers professional mosquito
        control services to protect your home or business from disease-carrying
        pests.
      </p>

      <p className="mb-4">
        Mosquitoes spread malaria, dengue, Zika, and yellow fever. Our proven
        treatment plans include fogging, larvicide, and breeding site
        elimination to drastically reduce mosquito populations.
      </p>

      <p className="mb-4">
        Whether it's a residential yard or an outdoor event venue, we tailor
        each treatment to your environment. We target mosquitoes at every stage
        of their life cycle—for results you can feel.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Mosquito Treatment Benefits:
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Non-toxic for pets and children</li>
        <li>Fast-drying, odor-free formulas</li>
        <li>Monthly and seasonal packages</li>
        <li>Outdoor comfort guaranteed</li>
      </ul>

      <p>
        Enjoy your backyard again. Book your mosquito treatment today and stay
        protected all year round.
      </p>
    </main>
  );
}
