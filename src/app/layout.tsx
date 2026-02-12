import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    template: "%s | Francisca Almeida",
    default: "Francisca Almeida",
  },

  description:
    "Full-Stack Software Engineer based in Lisbon. Building scalable systems with Java (Spring Boot), Next.js, React and FastAPI. Focused on automation, performance, and clean architecture.",

  keywords: [
    "Francisca Almeida",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Spring Boot",
    "Java",
    "FastAPI",
    "TypeScript",
    "Portfolio",
    "CV",
    "Lisbon"
  ],

  authors: [{ name: "Francisca Almeida" }],
  creator: "Francisca Almeida"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
