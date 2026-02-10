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
        {/* মেইন কন্টেইনারকে ফ্লেক্স করা হয়েছে শুধুমাত্র ডেস্কটপের জন্য */}
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-950">
          
          {/* Sidebar/Navbar Section */}
          {/* w-full রাখা হয়েছে যাতে মোবাইলে এটি পুরো স্ক্রিন নেয় */}
          <aside className="z-50 w-full lg:w-fit">
            <Navbar />
          </aside>

          {/* Main Content Section */}
          <main className="flex-1 min-w-0">
            {/* কন্টেন্ট এরিয়া: মোবাইলে টপ বারের নিচে যেন কন্টেন্ট না ঢুকে যায় তাই একটু প্যাডিং রাখা হয়েছে */}
            <div className="p-4 md:p-8 lg:p-12">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </div>
          </main>
          
        </div>
      </body>
    </html>
  );
}