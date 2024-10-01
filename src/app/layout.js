import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishal | Frontend Developer Portfolio",
  description: "Hi! I am Vishal Aakash discover my portfolio featuring responsively dynamic websites, innovative UI/UX designs, and cutting-edge frontend development skills. Specializing in React, Next.js, and modern web technologies.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
