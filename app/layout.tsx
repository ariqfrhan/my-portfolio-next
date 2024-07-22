import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ariq Farhan's Portfolio",
  description:
    "Welcome to the personal portfolio of Muhammad Ariq Farhan, a versatile software engineer, colorist, and RPA specialist with expertise in web and mobile app development, automation, and video editing.",
  keywords: [
    "Muhammad Ariq Farhan",
    "software engineer",
    "colorist",
    "RPA specialist",
    "web development",
    "mobile app development",
    "robotic process automation",
    "video editing",
    "portfolio",
  ],
  authors: [{ name: "Muhammad Ariq Farhan" }],
  creator: "Muhammad Ariq Farhan",
  publisher: "Muhammad Ariq Farhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Muhammad Ariq Farhan",
    description:
      "Personal portfolio showcasing expertise in software engineering, coloring, and RPA.",
    url: "https://www.yourwebsite.com",
    siteName: "Muhammad Ariq Farhan Portfolio",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ariq Farhan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ariq Farhan | Software Engineer & Colorist",
    description:
      "Personal portfolio showcasing expertise in software engineering, coloring, and RPA.",
    creator: "@ariqfrhan",
    images: ["https://www.yourwebsite.com/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
