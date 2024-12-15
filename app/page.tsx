import { Hero } from "./components/hero";
import { getShows } from "@/data-access/api";
import { Shows } from "./components/shows";

export default async function Home() {
  const shows = await getShows();

  return (
    <>
      <Hero />
      <Shows shows={shows} />
    </>
  );
}
