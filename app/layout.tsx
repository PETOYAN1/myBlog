import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MyBlog | Modern Developer Blog",
    template: "%s | MyBlog"
  },
  description: "A premium blog template for modern developers sharing insights on technology and design.",
  icons: {
    icon: "/icon.svg",
  },
};

import { ThemeProvider } from "@/app/components/ThemeProvider";

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-forwards">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
