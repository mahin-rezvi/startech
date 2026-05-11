import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/site-footer";
import Script from "next/script";

import { ClerkProvider } from "@clerk/nextjs";

import "@fontsource-variable/bricolage-grotesque/index.css";
import "@fontsource-variable/plus-jakarta-sans/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { getClerkPublishableKey } from "@/lib/clerk-config";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazaar - Product Catalog",
  description:
    "Fast, modern product catalog built from live Star Tech website data. Search 20,000+ products across all categories.",

  metadataBase: new URL(SITE_URL),

  openGraph: {
    title: "Bazaar",
    description: "Fast, modern product catalog",
    type: "website",
  },

};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#09111c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={getClerkPublishableKey()}>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Theme Loader */}
          <Script
            id="theme-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (() => {
                  try {
                    const stored = localStorage.getItem('startech-atlas-theme');

                    const system = window.matchMedia(
                      '(prefers-color-scheme: light)'
                    ).matches
                      ? 'light'
                      : 'dark';

                    const theme =
                      stored === 'light' || stored === 'dark' || stored === 'sepia'
                        ? stored
                        : system;

                    document.documentElement.dataset.theme = theme;
                    document.documentElement.style.colorScheme = theme;
                  } catch {
                    document.documentElement.dataset.theme = 'dark';
                    document.documentElement.style.colorScheme = 'dark';
                  }
                })();
              `,
            }}
          />

          {/* Performance */}
          <link rel="preconnect" href="https://www.startech.com.bd" />
          <link rel="dns-prefetch" href="https://www.startech.com.bd" />

        </head>
            <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="app-backdrop" />

          {/* Main Header */}
          <SiteHeader />
          {/* Page Content */}
          {children}

          {/* Service Worker */}
          <Script
            id="sw-register"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker
                    .register('/sw.js')
                    .catch(err => {
                      console.log('SW registration failed:', err);
                    });
                }
              `,
            }}
          />

          {/* Footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}