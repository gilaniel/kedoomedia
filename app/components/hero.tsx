"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isPaused, setPaused] = useState(false);

  const toggleGlitch = () => {
    const timeout = setTimeout(() => {
      setPaused(true);

      const timeout2 = setTimeout(() => {
        setPaused(false);

        toggleGlitch();

        clearTimeout(timeout);
        clearTimeout(timeout2);
      }, 6000);
    }, 4000);
  };

  useEffect(() => {
    toggleGlitch();
  }, []);

  return (
    <section className="flex mx-4 md:mx-10 xl:mx-[80px] mb-[100px] items-center lg:items-end relative justify-start xl:justify-end">
      <motion.div
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="max-w-full xl:max-w-[730px] min-[1440px]:max-w-[840px] min-[1930px]:max-w-[1280px] min-[2230px]:max-w-[1480px] mt-[100px] md:mt-[60px] xl:mt-0 xl:translate-y-[-20px]">
            <span className="inline-block pr-2">мы создаем</span>

            <span
              className={`involve-italic text-[--orange] inline-block glitch ${
                isPaused && "pause"
              }`}
              data-text="#видеоконтент,"
            >
              #видеоконтент,
            </span>

            <span className="involve-regular inline-block">
              интересный людям по всему миру
            </span>
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
};
