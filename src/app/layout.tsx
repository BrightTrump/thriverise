import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const rethink_Sans = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
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
    <html lang="en" className="scroll-smooth">
      <body className={rethink_Sans.className} suppressHydrationWarning={true}>
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
