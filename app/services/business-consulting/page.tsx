import ConsultingService from "@/components/ConsultingService";

export const metadata = {
  alternates: {
    canonical: "https://eljardsltdservices.com/services/business-consulting/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    title: "Business Consulting in Nigeria | Grow with Eljards Ltd",
    description:
      "10x your business with our data-driven consulting. We unlock profitability, market expansion, and product leadership using mind engineering strategies.",
    url: "https://eljardsltdservices.com/services/business-consulting",
    siteName: "Eljards Ltd Services",
    images: [
      {
        url: "/logos/eljardslogo.png",
        width: 800,
        height: 600,
        alt: "Eljards Ltd Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  title: "Business Consulting in Nigeria | Grow with Eljards Ltd",
  description:
    "10x your business with our data-driven consulting. We unlock profitability, market expansion, and product leadership using mind engineering strategies.",
  keywords: [
    "business consulting Nigeria",
    "grow startup Nigeria",
    "product strategy",
    "market expansion",
  ],
};

export default function ConsultingPage() {
  return <ConsultingService />;
}
