import { ShowItem } from "@/types/model";
import Image from "next/image";

export const Shows = ({ shows }: { shows: ShowItem[] }) => {
  return (
    <section className="px-5 md:px-10 lg:px-[80px] mb-[100px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        <h2 className="text-[32px] leading-[130%] uppercase">Наши шоу</h2>

        <div className="flex flex-col gap-[80px] max-w-[840px] w-full">
          {shows.map((show) => (
            <div
              className="flex flex-col lg:flex-row items-center lg:items-start gap-10"
              key={show.id}
            >
              <div className="flex flex-col gap-5">
                <Image
                  src={`/shows/show-${show.id + 1}.png`}
                  alt={show.title}
                  width={400}
                  height={206}
                />
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="label">Подписчики</span>
                    <span className="text-[32px] leading-[130%] uppercase">
                      2.81М
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="label">Просмотры</span>
                    <span className="text-[32px] leading-[130%] uppercase">
                      700M+
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
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
  );
};
