import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Lawn care & landscape design`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "landscaping",
    "lawn care",
    "landscape design",
    "yard maintenance",
    "mulch and planting",
    "landscaping near me",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f3ec] text-stone-800">
        {children}
      </body>
    </html>
  );
}
