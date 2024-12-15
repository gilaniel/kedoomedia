export type ShowItem = {
  id:number,
  title: string
  author: string
  description: string
  video: string
  genre: string
  audition: string
  lang: string
  links: {
    name: string,
    link: string
  }[]
}