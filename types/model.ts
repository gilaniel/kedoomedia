export type ShowItem = {
  id: number;
  title: string;
  author: string;
  desc: string;
  genre: string;
  views: string;
  subs: string;
  links: {
    name: string;
    link: string;
  }[];
};
