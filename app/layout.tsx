import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Japan Sim Trip - Your Guide to Japan Travel Connectivity",
  description: "Complete guides to SIM cards, WiFi, and JR Pass for travelers in Japan. Stay connected during your Japan trip.",
  keywords: "Japan SIM card, Japan WiFi, JR Pass, Japan travel connectivity, pocket WiFi Japan",
  openGraph: {
    title: "Japan Sim Trip - Your Guide to Japan Travel Connectivity",
    description: "Complete guides to SIM cards, WiFi, and JR Pass for travelers in Japan",
    url: "https://japansimtrip.com",
    siteName: "Japan Sim Trip",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Sim Trip - Your Guide to Japan Travel Connectivity",
    description: "Complete guides to SIM cards, WiFi, and JR Pass for travelers in Japan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm border-b">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                  Japan Sim Trip
                </Link>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-gray-50 border-t mt-12">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Japan Sim Trip. All rights reserved.</p>
                <p className="mt-2 text-sm">Your trusted guide for staying connected in Japan.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
