import { Inter } from "next/font/google";
import Image from "next/image";
import { type } from "os";
import { useId } from "react";
import styles from "@/styles/formSearch.module.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  placeholder: string;
  typeInput: "text";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormSearch({
  typeInput,
  placeholder,
  value,
  onChange,
}: Props) {
  const id = useId();
  return (
    <div className={styles["container"]}>
      <input
        className={styles["input-container"]}
        placeholder={placeholder}
        id={id}
        type={typeInput}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
