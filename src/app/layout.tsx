
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import GymProvider from "@/context/GymContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG | Workout Library",
  description: "Track your workouts and achieve your fitness goals with FITLOG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GymProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </GymProvider>
      </body>
    </html>
  );
}
