import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";

const forum = localFont({
  src: [
    {
      path: "../../public/fonts/forum/Forum-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    // {
    //   path: "../../public/fonts/Aeonik-Black.ttf",
    //   weight: "700",
    //   style: "normal"
    // },
  ],
  display: 'swap',
  variable: '--font-forum'
});

const dm_sans = localFont({
  src: [
    {
      path: "../../public/fonts/dm-sans/DM_Sans-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/dm-sans/DM_Sans-Bold.woff2",
      weight: "700",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-dm_sans'
});

export const metadata: Metadata = {
  title: "Gurung BBQ - Authentic Nepali BBQ Restaurant",
  description: "Experience authentic Nepali BBQ at Gurung BBQ. Savor traditional grilled meats, momos, and Himalayan flavors in a warm, welcoming atmosphere. Fresh ingredients, bold spices, and time-honored recipes.",
  keywords: [
    "Gurung BBQ",
    "Nepali restaurant",
    "BBQ restaurant",
    "Himalayan cuisine",
    "grilled meats",
    "momos",
    "authentic Nepali food",
    "traditional BBQ",
    "Asian cuisine",
    "restaurant in Dharan",
    "BBQ restaurant Dharan",
    "Nepali restaurant Dharan",
    "best restaurant Dharan",
    "Dharan food",
    "Dharan dining",
    "restaurant near me Dharan",
    "Dharan BBQ",
    "Gurung BBQ Dharan",
    "authentic Nepali restaurant Dharan",
    "Himalayan restaurant Dharan",
    "grilled food Dharan",
    "momos Dharan",
    "traditional Nepali food Dharan",
    "family restaurant Dharan",
    "local restaurant Dharan"
  ],
  authors: [{ name: "Gurung BBQ Restaurant" }],
  creator: "Gurung BBQ",
  publisher: "Gurung BBQ",
  metadataBase: new URL("https://www.gurungbbq.com/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,  // Search engine will index this page
    follow: true,  // Search engine will follow its links
    nocache: true,  // Doesn't store cached version of the pages and always check for fresh data/refreshes
    googleBot: {
      index: true,  // Same as above, but specifically for Google
      follow: true,  // Same as above, but specifically for Google
      noimageindex: false,  // Setting it to false shows photos in google images
      "max-video-preview": -1,  // Show full video previews in search (-1 = unlimited)
      "max-image-preview": "large",  // Show large image previews in search
      "max-snippet": -1,  // Show full text snippets in search (-1 = unlimited)
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Gurung BBQ - Authentic Nepali BBQ Restaurant",
    description: "Experience authentic Nepali BBQ at Gurung BBQ. Savor traditional grilled meats, momos, and Himalayan flavors in a warm, welcoming atmosphere. Fresh ingredients, bold spices, and time-honored recipes.",
    type: "website",
    locale: "en_US",
    url: "https://www.gurungbbq.com/",
    siteName: "Gurung BBQ",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "Gurung BBQ Preview",
      }
    ],
  },
  category: "restaurant",
  classification: "Restaurant",
  referrer: "origin-when-cross-origin",
  applicationName: "Gurung BBQ",
  generator: "Next.js",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${forum.variable} ${dm_sans.variable}`}
        suppressHydrationWarning={true}
      >
        {children}

        <IonicScripts />
      </body>
    </html>
  );
}
