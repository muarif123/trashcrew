import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:{
    icon:[
      '/favicon-32x32.png'

    ],
    apple:[
      "/apple-touch-icon.png"
    ],
    shortcut:[
      "/apple-touch-icon.png"


    ],
    
  },
  title: "Trash Crew",
  description: "An online market-place for NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
