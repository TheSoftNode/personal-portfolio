import About from "@/components/About";
import Clients from "@/components/Client";
import GetInTouch from "@/components/GetInTouch";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home()
{
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center
   items-center flex-col overflow-hidden">
      <div className="w-full">
        <Header />
        <Hero />
        <About />
        <Services />
        <Work />
        <Clients />
        <GetInTouch />
        <Footer />
      </div>
    </main>
  );
}
