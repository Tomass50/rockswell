import React, { useEffect, useRef, useState } from "react";
import stylesBg from "@/styles/bg.module.css";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { MAIN_BG } from "@/constants/main-bg";

const MainImage = () => {
  let [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(Math.floor(Math.random() * MAIN_BG.length));
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <section className={stylesBg["bg-image"]}>
      <AnimatePresence>
        <motion.div
          key={count}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className={stylesBg["image-wrapper"]}
        >
          <Image
            className={stylesBg["bg-image"]}
            alt="bg-image"
            objectFit="cover"
            width={10000}
            height={10000}
            src={MAIN_BG[count ?? 0]}
            blurDataURL={MAIN_BG[count ?? 0]}
            placeholder="blur"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

let variants = {
  enter: {
    opacity: 0,
  },
  center: { x: 0, opacity: 1 },
  exit: {
    opacity: 0,
  },
};

export default MainImage;
