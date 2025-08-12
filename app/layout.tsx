import type { Metadata } from "next";
import { Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto_font = Roboto({
    variable: "--font-roboto",
});

const geist_mono = Geist_Mono({
    variable: "--font-geist-mono",
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
        <html lang="en">
            <body
                className={`${roboto_font.variable} ${geist_mono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
