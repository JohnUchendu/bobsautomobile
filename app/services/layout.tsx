// import type { Metadata } from "next";

import WhatTheySay from "@/components/WhatTheySay";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatTheySay />
      </body>
    </html>
  );
}
