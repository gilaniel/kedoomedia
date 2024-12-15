"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="h-[100vh] flex px-5 md:px-10 lg:px-[80px] py-[100px] items-center lg:items-end">
      <div className="flex gap-10 lg:gap-[80px] items-start justify-between w-full flex-wrap">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src="/logo.svg"
            alt="Kedoomedia"
            width={360}
            height={18}
            className="translate-y-[5px] min-w-[320px] md:min-w-[360px]"
            quality={100}
          />
        </motion.div>

        <h1 className="flex flex-col max-w-[840px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <span>мы создаем</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          >
            <span className="involve-italic text-[--orange]">
              #видеоконтент
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
          >
            <span className="involve-regular">
              интересный людям по всему миру
            </span>
          </motion.div>
        </h1>
      </div>
    </section>
  );
};
