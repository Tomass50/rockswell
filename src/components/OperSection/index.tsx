import React from "react";
import stylesOper from "@/styles/operations.module.css";
import Title from "@/components/Title";
import OperTextHeader from "./components/OperTextHeader";
import OperScreen from "./components/OperScreen";
import OperFirst from "./components/OperFirst";
import OperSecond from "./components/OperSecond";

const OperSection = () => {
  return (
    <>
      <div className={stylesOper["header-text-container"]}>
        <Title className={stylesOper["header"]}>Company Operations</Title>
        <OperTextHeader />
        <OperScreen />
        <div className={stylesOper["operations-container"]}>
          <OperFirst />
          <OperSecond />
        </div>
      </div>
    </>
  );
};

export default OperSection;
