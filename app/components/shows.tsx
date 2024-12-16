"use client";

import { ShowItem } from "@/types/model";
import Image from "next/image";
import { motion } from "framer-motion";

export const Shows = ({ shows }: { shows: ShowItem[] }) => {
  return (
    <motion.div
      initial={{ y: "50vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.2,
        duration: 1,
      }}
    >
      <section className="px-4 md:px-10 xl:px-[80px] mb-[100px]">
        <div className="flex flex-col min-[1440px]:flex-row items-start justify-between gap-10 md:gap-[80px] min-[1440px]:gap-10">
          <h2 className="text-[32px] leading-[130%] uppercase relative min-[1440px]:sticky top-1/2">
            Наши шоу
          </h2>

          <div
            className="flex flex-col gap-[80px] max-w-full min-[1440px]:max-w-[840px] min-[1930px]:max-w-[1280px] min-[2230px]:max-w-[1480px] w-full"
            style={{ transition: "all .5s ease" }}
          >
            {shows.map((show) => (
              <div
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
                key={show.id}
              >
                <div className="flex flex-col gap-5 w-full md:w-auto">
                  <Image
                    src={`/shows/show-${show.id + 1}.png`}
                    alt={show.title}
                    width={400}
                    height={206}
                    className="w-full md:w-[320px] lg:w-[400px]"
                    style={{ transition: "all .5s ease" }}
                  />
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="label">Подписчики</span>
                      <span className="text-[32px] leading-[130%] uppercase">
                        {show.subs}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="label">Просмотры</span>
                      <span className="text-[32px] leading-[130%] uppercase">
                        {show.views}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 w-full md:w-auto">
                  <span className="text-[24px] leading-[125%] uppercase border-b-[1px] border-[--black] pb-3">
                    {show.title}
                  </span>
                  <div className="show-row">
                    <div className="label w-[120px]">Автор</div>
                    <div className="desc">{show.author}</div>
                  </div>

                  <div className="show-row">
                    <div className="label w-[120px]">О канале</div>
                    <div className="desc">{show.description}</div>
                  </div>

                  <div className="show-row">
                    <div className="label w-[120px]">Видео</div>
                    <div className="desc">{show.video}</div>
                  </div>

                  <div className="show-row">
                    <div className="label w-[120px]">Жанр</div>
                    <div className="desc">{show.genre}</div>
                  </div>

                  <div className="show-row">
                    <div className="label w-[120px]">Аудитория</div>
                    <div className="desc">{show.audition}</div>
                  </div>

                  <div className="show-row">
                    <div className="label w-[120px]">Язык</div>
                    <div className="desc">{show.lang}</div>
                  </div>

                  <div className="show-row">
                    <div className="label w-[120px]">Посмотреть</div>
                    <div className="desc">
                      {show.links.map((link, i, array) => (
                        <a
                          key={i}
                          href={link.link}
                          target="_blank"
                          className="text-[--orange]"
                        >
                          {link.name}
                          {i !== array.length - 1 && ", "}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
