import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity with Ivy",
  description: "Cut through the noise. Lead with intention. Coaching and frameworks for middle managers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
