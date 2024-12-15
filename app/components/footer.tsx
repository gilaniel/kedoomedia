import Image from "next/image";
import { Form } from "./form";

export const Footer = () => {
  return (
    <footer className="px-5 md:px-10 lg:px-[80px]">
      <div className="bg-[--black] p-10 lg:p-[80px] rounded-[20px] mb-[100px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
          <span className="text-white uppercase text-[32px] leading-[130%]">
            Связаться с нами
          </span>
          <Form />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mb-[100px] gap-5">
        <Image
          src="/logo.svg"
          alt="Kedoomedia"
          width={240}
          height={12}
          quality={100}
        />
        <span className="condensed text-[12px] leading-[120%] uppercase">
          ©{new Date().getFullYear()} KedooMedia Ltd. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
