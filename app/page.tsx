import { Hero } from "./components/hero";
import { getShows } from "@/data-access/api";
import { Shows } from "./components/shows";
import { Logo } from "./components/logo";

export default async function Home() {
  const shows = await getShows();

  return (
    <div className="mt-0 xl:mt-[50vh]">
      <Logo />
      <Hero />
      <Shows shows={shows} />
    </div>
  );
}
