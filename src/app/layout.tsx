import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE CONTENT GANG | Premium Video Content Marketing",
  description:
    "We build cinematic content systems for professional service providers that turn social media into a client-generating machine.",
  keywords: [
    "video content marketing",
    "lead generation",
    "social media",
    "content agency",
  ],
  openGraph: {
    title: "THE CONTENT GANG | Premium Video Content Marketing",
    description:
      "Cinematic content systems that turn social media into a client-generating machine.",
    type: "website",
  },
  icons: {
    icon: "/Logo-e1765773867927.png",
  },
};

import SplashCursor from "@/components/SplashCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${epilogue.variable}`}>
      <head>
        {/* Material Symbols icon font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body>
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
