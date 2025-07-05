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
    <html lang="en" data-theme="cupcake">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css" 
          rel="stylesheet" 
          type="text/css" 
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col bg-base-100">
          {/* Navigation */}
          <div className="navbar bg-white shadow-lg border-b border-gray-100">
            <div className="container mx-auto">
              <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl text-base-content">
                  <svg className="w-6 h-6 text-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Japan Sim Trip
                </Link>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                  <li><Link href="/" className="btn btn-ghost btn-sm font-medium">Home</Link></li>
                  <li className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn btn-ghost btn-sm font-medium">
                      Topics
                      <svg className="fill-current w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                      </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[50] menu p-2 shadow-2xl bg-white border border-gray-200 rounded-box w-52">
                      <li><Link href="/category/sim" className="hover:bg-purple-50">📱 SIM Cards</Link></li>
                      <li><Link href="/category/wifi" className="hover:bg-purple-50">📡 Pocket WiFi</Link></li>
                      <li><Link href="/category/transport" className="hover:bg-purple-50">🎫 JR Pass</Link></li>
                      <li><Link href="/category/free-wifi" className="hover:bg-purple-50">📶 Free WiFi</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/about" className="btn btn-ghost btn-sm font-medium">About</Link></li>
                  <li>
                    <button className="btn btn-primary btn-sm ml-2 bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white shadow-lg hover:shadow-xl">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold">Japan Sim Trip</span>
                  </div>
                  <p className="text-gray-400 text-sm">Your complete guide to staying connected in Japan</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-gray-300">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-gray-300">Topics</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/category/sim" className="text-gray-400 hover:text-white transition-colors">SIM Cards</Link></li>
                    <li><Link href="/category/wifi" className="text-gray-400 hover:text-white transition-colors">Pocket WiFi</Link></li>
                    <li><Link href="/category/transport" className="text-gray-400 hover:text-white transition-colors">JR Pass</Link></li>
                    <li><Link href="/category/free-wifi" className="text-gray-400 hover:text-white transition-colors">Free WiFi</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-gray-300">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link></li>
                    <li><Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © {new Date().getFullYear()} Japan Sim Trip. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
