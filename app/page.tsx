import About from "@/components/about/About";
import Clients from "@/components/review/Client";
import GetInTouch from "@/components/contact/GetInTouch";
import { Header } from "@/components/heading/Header";
import Hero from "@/components/hero/Hero";
import Services from "@/components/service/Services";
import Work from "@/components/project/Work";
import Footer from "@/components/footer/Footer";


export default function Home()
{
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center
   items-center flex-col overflow-hidden">
      <div className="w-full">
        <Hero />
        <About />
        <Services />
        <Work />
        <Clients />
        <GetInTouch />
      </div>
    </main>
  );
}
