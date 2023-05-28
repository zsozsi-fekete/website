import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Zsolt Fekete",
  description: "Personal website of Zsolt Fekete",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
