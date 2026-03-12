import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CommonProvider } from "../context/common-context";

const titleFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julio Espinola | Portfolio 2026",
  description: "Portfolio 2026: Frontend, React, Next.js y soluciones web modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <CommonProvider>
        <body
          className={`${titleFont.variable} ${monoFont.variable} antialiased ambient-grid`}
        >
          {children}
        </body>
      </CommonProvider>
    </html>
  );
}
