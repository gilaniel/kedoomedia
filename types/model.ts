export type ShowItem = {
  id: number;
  title: string;
  author: string;
  description: string;
  video: string;
  genre: string;
  audition: string;
  lang: string;
  views: string;
  subs: string;
  links: {
    name: string;
    link: string;
  }[];
};
