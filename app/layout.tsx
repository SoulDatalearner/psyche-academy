import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppChat from "./components/WhatsAppChat";

export const metadata: Metadata = {
  title: "Psyche Academy",
  description: "Master Psychological Concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        {/* Global sticky navigation bar loaded site-wide */}
        <Navbar />
        
        {/* Screen layout page render children stack injector */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Floating global responsive WhatsApp chat asset */}
        <WhatsAppChat />
      </body>
    </html>
  );
}