import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ThriveRise",
  description: "",
  icons: {
    icon: "/website-ui/thriverise-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <NextTopLoader
          color="#c1c1c1"
          showSpinner={false}
          height={4}
          speed={3000}
        />

        <NextTopLoader
          color="#c1c1c1"
          showSpinner={false}
          height={4}
          speed={3000}
        />
        {children}
      </body>
    </html>
  );
}
