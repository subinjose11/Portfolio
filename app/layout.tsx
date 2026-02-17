import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Subin Jose Y | Flutter Developer",
    template: "%s | Subin Jose Y",
  },
  description:
    "Flutter Developer specializing in cross-platform mobile app development. Building beautiful, performant applications with clean architecture and modern practices.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "iOS",
    "Android",
    "Cross-platform",
    "BLoC",
    "Clean Architecture",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "Subin Jose Y" }],
  creator: "Subin Jose Y",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://subinjose.dev",
    title: "Subin Jose Y | Flutter Developer",
    description:
      "Flutter Developer specializing in cross-platform mobile app development.",
    siteName: "Subin Jose Y Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subin Jose Y | Flutter Developer",
    description:
      "Flutter Developer specializing in cross-platform mobile app development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-900 text-dark-50`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
