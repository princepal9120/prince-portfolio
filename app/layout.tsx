import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter= Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Prince Pal | Full Stack | Mobile | Gen AI Developer',
  description: 'Portfolio of Prince Pal, a passionate developer building scalable apps with cutting-edge technologies.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className} 
      >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          

        </ThemeProvider>
      </body>
    </html>
  );
}
