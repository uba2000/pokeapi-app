import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ProgressWrapper from "@/components/Wrapper/ProgressWrapper";

import "./globals.css";
import Link from "next/link";
import AppWrapper from "@/components/Wrapper/AppWrapper";

// Define the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "Pokemón Code Challenge",
  description: "Browse Pokémon categories/types, view a list of Pokémon belonging to a specific category, search for Pokémon by name, and view detailed information and stats for individual Pokémon.",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the content with ProgressWrapper and AppWrapper */}
        <ProgressWrapper>
          <AppWrapper>
            {children}
          </AppWrapper>
        </ProgressWrapper>
      </body>
    </html>
  );
}
