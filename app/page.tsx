import About from "@/components/About";
// import Approach from "@/components/Approach";
import Clients from "@/components/Client";
import GetInTouch from "@/components/GetInTouch";
// import Grid from "@/components/Grid";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Services from "@/components/Services";

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
        {/* <Grid /> */}
        <Clients />
        {/* <Approach /> */}
        <GetInTouch />
        <Footer />
      </div>
    </main>
  );
}
