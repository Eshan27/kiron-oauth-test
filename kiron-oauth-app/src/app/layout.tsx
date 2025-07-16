import { Providers } from "./providers";
import React from "react";


export const metadata = {
  title: "Next.js OAuth Example",
  description: "Testing OAuth with NextAuth.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
