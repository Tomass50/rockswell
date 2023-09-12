import React from "react";
import stylesOper from "@/styles/operations.module.css";
import CargoShip from "./CargoShip";

const OperFirst = () => {
  return (
    <>
      <div className={stylesOper["operations"]}>
        <div className={stylesOper["icon-text-container"]}>
          <CargoShip />
          <p className={stylesOper["icon-text"]}>Stevedoring services:</p>
        </div>
        <ul className={stylesOper["text-list"]}>
          <li className={stylesOper["text"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam
            assumenda consequatur culpa deserunt dolor dolores expedita harum
            impedit labore maxime necessitatibus perspiciatis qui, quibusdam,
            repellendus sit veniam veritatis vitae!
          </li>
          <li className={stylesOper["text"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            doloremque, eligendi exercitationem impedit incidunt minima numquam
            placeat provident reprehenderit sequi. Alias architecto assumenda
            eligendi laudantium minus nesciunt officia, quas quisquam!
          </li>
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

export default OperFirst;
