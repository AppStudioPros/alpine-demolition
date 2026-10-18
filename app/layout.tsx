import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Alpine Demolition | Commercial & Industrial Demolition in Colorado",
    template: "%s | Alpine Demolition",
  },
  description:
    "Alpine Demolition provides structural demolition, environmental remediation, tank removal, and material recovery services for commercial and industrial projects throughout Colorado.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://alpine-demolition.vercel.app"
  ),
  openGraph: {
    siteName: "Alpine Demolition",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
