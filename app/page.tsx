import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BiHome } from "react-icons/bi";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <BiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/",
      icon: <BiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tweet",
      link: "/",
      icon: <BiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
