import { shows } from "./shows";

export async function getShows() {
  return Promise.resolve(shows);
}