import Footer from "@/components/common/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata = {
  title: "Twenty Square",
  description: "A wonderful way to Transform your walls.",
  openGraph: {
    title: "Twenty Square",
    description: "A wonderful way to Transform your walls.",
    images: ["/Home.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interTight.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}