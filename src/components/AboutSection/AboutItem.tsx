import React from "react";
import stylesAbout from "@/styles/about.module.css";
import Image from "next/image";
import Medal from "@/assets/Medal.svg";

const AboutItem = () => {
  return (
    <>
      <div className={stylesAbout["icon-text-container"]}>
        <div className={stylesAbout["icon"]}>
          <Image className="" src={Medal} alt=""></Image>
        </div>
        <div className={stylesAbout["icon-text"]}>
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>
      <div className={stylesAbout["text-container"]}>
        <ul className={stylesAbout["text"]}>
          Lorem ipsum dolor sit amet consectetur. Lorem nullam libero <br />{" "}
          lorem tristique aliquam ut quam.
        </ul>
        <ul className={stylesAbout["text"]}>
          Lorem ipsum dolor sit amet consectetur. Lorem nullam libero <br />{" "}
          lorem tristique aliquam ut quam.
        </ul>
        <ul className={stylesAbout["text"]}>
          Lorem ipsum dolor sit amet consectetur. Lorem nullam libero <br />{" "}
          lorem tristique aliquam ut quam.
        </ul>
      </div>
    </>
  );
};

export default AboutItem;
