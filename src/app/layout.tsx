import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
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

const SITE_NAME = "Francisca Almeida";
const DEFAULT_TITLE = "Francisca Almeida | Software Engineer";
const OG_IMAGE = "https://falmeida.dev/og-image.png";
const DESCRIPTION =
  "Full-stack software engineer in Lisbon (TypeScript, Next.js, Python, PostgreSQL): Odoo ERP migrations, the SINFO website rebuild and open-source work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://falmeida.dev"),
  title: {
    default: DEFAULT_TITLE,
    // Pages export their own title (e.g. "Projects") and get the suffix.
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
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
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  // "./" resolves against the current route, so every page gets its own
  // canonical URL on falmeida.dev even when served from GitHub Pages.
  alternates: { canonical: "./" },
  // The preview image is an absolute URL on purpose: a file-convention
  // opengraph-image would be prefixed with the GitHub Pages base path and
  // served without an image content type.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Francisca Almeida Portfolio",
    url: "./",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Francisca Almeida, Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
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
          <MotionProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
