import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--font-poppins-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aakash Portfolio",
  description:
    "Showcasing Aakash's professional projects, skills, and expertise in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
