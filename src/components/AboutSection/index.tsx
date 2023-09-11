import React from "react";
import AboutItem from "@/components/AboutSection/AboutItem";
import stylesAbout from "@/styles/about.module.css";
import Title from "@/components/Title";
import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, y: 100 },
};
const AboutSection = () => {
  return (
    <>
      <Title className={stylesAbout["header-text"]}>About company</Title>
      <motion.section
        transition={{ staggerChildren: 0.3, when: "beforeChildren" }}
        className={stylesAbout["about-container"]}
      >
        {[0, 0, 0, 0].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={variants}
            initial={"hidden"}
            whileInView={"visible"}
            className={stylesAbout["container"]}
            viewport={{ once: true }}
          >
            <AboutItem key={i} />
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default AboutSection;
