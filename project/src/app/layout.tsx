import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Florian Essomba",
  description: "Porfolio of Florian Essomba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <nav className="fixed border border-[#0e1845] top-0 left-0 right-0">
            <div className="flex justify-between">
              <h1 className="text-2xl my-3 ml-5 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">PORTFOLIO</h1>
              <div className="my-3">
                <ul className="flex justify-between md:text-2xl md:space-x-20 max-[600px]:space-x-5 mr-5 font-semibold">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="https://github.com/KBluelvl/Portfolio" target="_blank">Code</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="container mt-24 px-12">
          {children}
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
