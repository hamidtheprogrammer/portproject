import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import UIContextProvider from "./context/UI/UIContext";
import "leaflet/dist/leaflet.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "All in one",
    template: "%s - All in one",
  },
  description: "Check out all my projects",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/Logo.png" />
      <body
        className={`${poppins.className} dark:bg-darkPrimaryBg bg-primaryBg h-full antialiased`}
      >
        <UIContextProvider>
          <Header />
          <main className="w-full flex">
            <Sidebar />
            <section className="relative lg:ml-[15.5rem] mt-14 max-sm:mt-12 flex-1">
              {children}
            </section>
          </main>
        </UIContextProvider>
      </body>
    </html>
  );
}
