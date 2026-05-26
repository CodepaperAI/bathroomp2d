import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bathroom Vanity Refinishing Toronto | 1-2 Day Vanity Upgrade - P2D",
  description:
    "Update your bathroom vanity without a full renovation. Professional vanity refinishing in Toronto & GTA - done in 1-2 days. Free quote in 24 hours.",
  robots: {
    index: false,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
