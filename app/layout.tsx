import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import PageLoader from "@/components/layout/PageLoader";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trinitryhomestay.com"),
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default: "Trinitry Home Stay | Suryanelli, Munnar",
    template: "%s | Trinitry Home Stay Munnar",
  },
  description:
    "Experience serene misty mountains, lush tea plantations, and authentic Kerala hospitality at Trinitry Home Stay in Suryanelli, Munnar.",
  keywords: [
    "Trinitry Home Stay",
    "Munnar homestay",
    "Suryanelli accommodation",
    "Kolukkumalai Munnar stay",
    "Kerala homestay Munnar",
    "Tea plantation homestay",
  ],
  openGraph: {
    title: "Trinitry Home Stay | Suryanelli, Munnar",
    description:
      "Experience serene misty mountains, lush tea plantations, and authentic Kerala hospitality at Trinitry Home Stay in Suryanelli, Munnar.",
    url: "https://trinitryhomestay.com",
    siteName: "Trinitry Home Stay",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Trinitry Home Stay in Suryanelli, Munnar, Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinitry Home Stay | Suryanelli, Munnar",
    description:
      "Experience serene misty mountains, lush tea plantations, and authentic Kerala hospitality at Trinitry Home Stay in Suryanelli, Munnar.",
    images: ["/image-4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
