import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer, SkipLink } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChatProvider } from "@/components/chat/ChatProvider";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { MotionProvider } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.parish}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.parishFull }],
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "en_US",
    type: "website",
    siteName: site.title,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport = {
  themeColor: "#0c0b0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-ivory">
        <MotionProvider>
          <ChatProvider>
            <SkipLink />
            <div className="grain" aria-hidden="true" />
            <Navbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
            <ChatWidget />
          </ChatProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
