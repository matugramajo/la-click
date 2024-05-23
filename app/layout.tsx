import type { Metadata } from "next";
import { Inter, Ropa_Sans} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });
const ropasans = Ropa_Sans({ 
  subsets: ['latin'],
  weight:["400"],
  variable: '--font-ropasans',
});

export const metadata: Metadata = {
  title: "Fiesta Click",
  description: "La Click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ropasans.variable}>{children}</body>
      <Analytics />
    </html>
  );
}
