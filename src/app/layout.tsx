import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/UI/layout/header";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <HeroUIProvider>
          <main
            style={{
              height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`,
            }}
            className="flex flex-col w-full justify-start items-center"
          >
            {children}
          </main>
        </HeroUIProvider>
        <footer style={{ height: layoutConfig.footerHeight }} className="flex justify-center items-center">
          111
        </footer>
      </body>
    </html>
  );
}
