import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Francisca Almeida | Software Engineer",
  description: "Software Engineer and CS Master's student at IST.",
  keywords: [
    "Francisca Almeida",
    "Software Engineer",
    "Full-Stack Developer",
    "IST",
    "Portugal",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Francisca Almeida" }],
  creator: "Francisca Almeida",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Francisca Almeida | Software Engineer",
    description: "Software Engineer and CS Master's student at IST.",
    siteName: "Francisca Almeida Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisca Almeida | Software Engineer",
    description: "Software Engineer and CS Master's student at IST.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
