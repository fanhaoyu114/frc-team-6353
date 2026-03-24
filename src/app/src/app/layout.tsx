import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRC Team 6353 | REBUILT",
  description: "FRC Team 6353 from EFZ Shanghai. A Decade of Engineering Heritage (2016-2026).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
