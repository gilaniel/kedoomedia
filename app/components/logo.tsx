"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export const Logo = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="flex relative w-full xl:hidden justify-center">
        <motion.div
          initial={{ y: "calc(50vh - 30px)" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#f9f1eb] pl-0 md:pl-[40px] xl:pl-[80px] py-6 md:py-10"
          >
            <Image
              src="/logo.svg"
              alt="Kedoomedia"
              width={340}
              height={18}
              className="min-w-[226px] w-[226px] md:w-full md:min-w-[340px]"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ position: "relative", top: 0 }}
        animate={{ position: "sticky", top: 45 }}
        transition={{ delay: 2.2 }}
        className="z-10 logo hidden xl:block"
      >
        <motion.div
          initial={{ x: "-50%", left: "50%" }}
          animate={{ x: 0, left: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="absolute"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#f9f1eb] pl-[80px] py-10 translate-y-[-50%]"
          >
            <Image
              src="/logo.svg"
              alt="Kedoomedia"
              width={340}
              height={18}
              className="min-w-[320px] md:min-w-[340px]"
              quality={100}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
