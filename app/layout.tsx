import type { Metadata } from "next";
import ScrollToTop from "@/components/scroll-to-top";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity Under Pressure",
  description: "Results without visibility is just a secret. Visibility without results is just noise. Deliver with clarity. Be seen with integrity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
