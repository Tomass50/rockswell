import { Inter } from "next/font/google";
import Image from "next/image";
import { useId } from "react";
import Link from "next/link";
import styles from "@/styles/headerBtn.module.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  btnText: string;
  onClick?: any;
};

export default function Button({ btnText, onClick }: Props) {
  return (
    <button className={styles["btn-container"]} onClick={onClick}>
      {btnText}
    </button>
  );
}
