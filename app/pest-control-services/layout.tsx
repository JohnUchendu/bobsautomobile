// import type { Metadata } from "next";

import Testimonials from "@/components/Testimonial";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Testimonials />
      </body>
    </html>
  );
}
