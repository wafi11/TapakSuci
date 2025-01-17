import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import getCurrentUser from "./actions/getCurrenUser";
import Navbar from "@/components/navbar";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "500", "900"] });

const MyFont = localFont({
  src: "../public/HousttelySignature-GOonz.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <html lang="en">
      <body className="bg-gray-100" data-barba="wrapper">
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
