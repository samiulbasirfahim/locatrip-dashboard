import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/lib/AuthContext";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Travel Assistant",
  description: "Blah Blah Blah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
