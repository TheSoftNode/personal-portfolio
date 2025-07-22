import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ToastContainer
            theme="light"
            position='top-center'
            autoClose={4000}
            closeOnClick={true}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            toastClassName=".toast-message"
          />
          <Header />
          {children}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
