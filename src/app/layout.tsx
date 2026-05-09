import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Limpiafy",
  description: "Servicios profesionales de limpieza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        figtree.variable
      )}
    >
      <body className="min-h-full font-sans flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}