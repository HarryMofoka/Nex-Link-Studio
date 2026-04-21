import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { TransitionProvider } from "@/components/ui/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexlink Studio | A Product of Nexlink Solutions ZA",
    template: "%s | Nexlink Studio",
  },
  description: "Nexlink Studio by Nexlink Solutions ZA. Launch an incredibly fast, premium, and highly-converting website in 48 hours. Productized web design and development.",
  keywords: ["Nexlink Solutions ZA", "Nexlink Studio", "Web Design South Africa", "Productized Web Agency", "Next.js Web Development", "Fast Website Design", "High Converting Websites"],
  authors: [{ name: "Nexlink Solutions ZA", url: "https://www.nexlinksolutionsza.co.za" }],
  creator: "Nexlink Solutions ZA",
  publisher: "Nexlink Solutions ZA",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.nexlinksolutionsza.co.za",
    siteName: "Nexlink Studio by Nexlink Solutions",
    title: "Nexlink Studio | Premium Digital Web Agency",
    description: "Launch an incredibly fast, premium, and highly-converting website in 48 hours. A product of Nexlink Solutions ZA.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Nexlink Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexlink Studio | A Product of Nexlink Solutions ZA",
    description: "Launch an incredibly fast, premium, and highly-converting website in 48 hours.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#fafafa] text-neutral-900 w-full min-h-screen flex flex-col relative overflow-x-hidden selection-purple selection:text-white transition-colors duration-500 dark:bg-[#050505] dark:text-white font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


