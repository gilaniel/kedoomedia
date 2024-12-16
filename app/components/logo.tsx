"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
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

      <div className="flex absolute top-0 left-0 w-full h-[100vh] pointer-events-none z-0">
        <motion.div
          initial={{ top: "50%" }}
          animate={{ top: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="xl:hidden absolute left-1/2 translate-x-[-50%] md:left-0 md:translate-x-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#f9f1eb] pl-4 md:pl-[40px] xl:pl-[80px] py-10"
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
      </div>
    </>
  );
};
