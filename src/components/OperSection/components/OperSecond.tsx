import React from "react";
import stylesOper from "@/styles/operations.module.css";
import Cargo from "./Cargo";

const OperSecond = () => {
  return (
    <>
      <div className={stylesOper["operations"]}>
        <div className={stylesOper["icon-text-container"]}>
          <Cargo />
          <p className={stylesOper["icon-text"]}>Handling of containers:</p>
        </div>
        <ul className={stylesOper["text-list"]}>
          <li className={stylesOper["text"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            doloremque, eligendi exercitationem impedit incidunt minima numquam
            placeat provident reprehenderit sequi. Alias architecto assumenda
            eligendi laudantium minus nesciunt officia, quas quisquam!
          </li>
        </ul>
      </div>
    </>
  );
};

export default OperSecond;
