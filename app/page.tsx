import { Approach } from "@/components/approach";
import { Techtools } from "@/components/techtools";
import { Experience } from "@/components/experience";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { RecentProjects } from "@/components/recent-projects";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navigation/navbar";
import { Planning } from "@/components/planning";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-6xl w-full overflow-hidden">
        <Navbar />
        <Hero />
        <Grid />
        <RecentProjects />
        <Techtools />
        <Approach />
        <Planning />
        <Footer />
      </div>
    </main>
  );
}
