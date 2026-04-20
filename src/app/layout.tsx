import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GlobalLayout from "@/components/GlobalLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Soft Campus — Custom Software, Web & AI Solutions | Delhi, India",
  description:
    "Soft Campus is a Delhi-based software company with 12+ years of experience delivering custom software, web apps, mobile apps, AI/ML solutions, and cloud infrastructure to 1000+ clients across India, USA, Russia, and Armenia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GlobalLayout>
            <Navbar />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
          </GlobalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
