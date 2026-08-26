import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://s-karthikeyan-portfolio.vercel.app"),
  title: "Karthikeyan S | Full Stack Web Developer & AI Engineer",
  description:
    "Portfolio of Karthikeyan S — Final-year Computer Science Engineering student specializing in Full Stack Web Development, Java Database Systems, AI Prompt Engineering, and IoT Automation.",
  keywords: [
    "Karthikeyan S",
    "AI Engineer",
    "Full Stack Web Developer",
    "Java Developer",
    "Prompt Engineer",
    "Portfolio",
    "Computer Science Student",
    "Salem",
  ],
  authors: [{ name: "KARTHIKEYAN S" }],
  creator: "KARTHIKEYAN S",
  openGraph: {
    title: "Karthikeyan S | Full Stack Web Developer & AI Engineer",
    description:
      "Portfolio of Karthikeyan S — Final-year Computer Science Engineering student specializing in Web Development, Java Systems, and AI Applications.",
    url: "https://s-karthikeyan-portfolio.vercel.app/",
    siteName: "KARTHIKEYAN S Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "KARTHIKEYAN S Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthikeyan S | Full Stack Web Developer & AI Engineer",
    description:
      "Portfolio of Karthikeyan S — AI & Web Developer from Salem, Tamil Nadu.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050816] text-white font-sans antialiased selection:bg-accent-cyan selection:text-black">
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
        
        {/* Main Content Wrapper */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
