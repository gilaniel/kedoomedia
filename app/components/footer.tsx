import Link from "next/link";
import { Form } from "./form";
import { FadeImg } from "./image";

export const Footer = () => {
  return (
    <footer className="px-4 md:px-10 xl:px-[80px]">
      <div className="bg-[--black] p-4 md:p-10 xl:p-[80px] rounded-[20px] mb-6 md:mb-[100px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <span className="text-white uppercase text-[32px] leading-[130%]">
            Связаться с нами
          </span>
          <Form />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mb-6 xl:mb-[100px] gap-6">
        <FadeImg
          src="/logo.svg"
          alt="Kedoomedia"
          width={240}
          height={12}
          quality={100}
        />

        <Link
          href="/privacy_policy"
          className="text-[12px]"
          // style={{ fontFamily: "var(--font-family)" }}
        >
          Политика обработки персональных данных
        </Link>

        <span className="condensed text-[12px] leading-[120%] uppercase">
          ©{new Date().getFullYear()} ООО «Кеду Медиа».Все права защищены.
        </span>
      </div>
    </footer>
  );
};
