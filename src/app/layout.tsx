import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import CHeaderDefault from "@/components/general/headerDefault/CHeaderDefault";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina personalizada!",
  description: "Oficiona de carros em São Paulo",
  keywords: [
    "oficina",
    "oficina de carros",
    "carros",
    "manutenção",
    "manutenção de carros",
  ],
  openGraph: {
    title: "DevMotors - Sua oficina personalizada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CHeaderDefault />
        {children}
      </body>
    </html>
  );
}
