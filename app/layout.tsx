import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "./globals.css";

const SITE_URL = "https://s-karthikeyan-portfolio.vercel.app";
const TITLE = "Karthikeyan S | Java Full Stack Developer";
const DESCRIPTION =
  "Portfolio of Karthikeyan S, a final-year Computer Science student from Salem building Java Full Stack projects with MySQL and modern web interfaces. Open to internships and entry-level roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Karthikeyan S",
    "Java Full Stack Developer",
    "Java Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Portfolio",
    "Computer Science Student",
    "Salem",
  ],
  authors: [{ name: "Karthikeyan S" }],
  creator: "Karthikeyan S",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Karthikeyan S Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Karthikeyan S, Java Full Stack Developer" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Marks that JS is running so reveal animations may hide content briefly. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
