import About from "@/components/about/About";
import Clients from "@/components/review/Client";
import GetInTouch from "@/components/contact/GetInTouch";
import Hero from "@/components/hero/Hero";
import Services from "@/components/service/Services";
import Work from "@/components/project/Work";
import PleaseReviewMe from "@/components/review/PleaseReviewMe";


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
        <PleaseReviewMe />
      </div>
    </main>
  );
}
