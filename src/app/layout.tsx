"use client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import { Provider } from "react-redux";
import { useState } from "react";
import Cart from "@/app/components/Cart";
import { store } from "@/redux/features/store";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCart, setShowCart] = useState(false);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
        <Topbar setShowCart={setShowCart}/>
        {showCart && <Cart setShowCart={setShowCart} />}
        <Navbar />
        {children}
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
