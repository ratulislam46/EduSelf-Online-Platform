import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eduself",
  description: "Honours Students Online Reading Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

          {/* Navbar Section */}
          <aside className="z-50 w-full lg:w-fit">
            <Navbar />
          </aside>

          {/* Main Content Section */}
          <main className="flex-1 min-w-0">
            <div className="p-4 md:p-8 lg:p-12">
              <div className="container mx-auto">
                {children}
              </div>
            </div>
          </main>

        </div>
      </body>
    </html>
  );
}