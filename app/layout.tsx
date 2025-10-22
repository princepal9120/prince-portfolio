import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Prince Pal",
  description:
    "Portfolio of Prince Pal, a passionate developer building scalable apps with cutting-edge technologies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          {/* <ChatbotWidget /> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
