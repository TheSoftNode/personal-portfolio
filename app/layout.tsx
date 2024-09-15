import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Header } from "@/components/heading/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theophilus Uchechukwu - Fullstack Software Engineer",
  description: "Experienced fullstack software engineer with a strong focus on backend development, skilled in frontend technologies, cloud computing, DevOps, networking, and data science. Passionate about creating scalable and efficient solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
