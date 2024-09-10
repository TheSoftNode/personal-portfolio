import About from "@/components/About";
import Clients from "@/components/Client";
import Grid from "@/components/Grid";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home()
{
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center
   items-center flex-col overflow-hidden">
      <div className="w-full">
        <Header />
        <Hero />
        <About />
        <Grid />
        <Clients />
      </div>
    </main>
  );
}
