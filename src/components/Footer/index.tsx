import React from "react";
import styleFooter from "../../styles/footer.module.css";

export const Footer = () => {
  return (
    <div className={styleFooter["footer-container"]}>
      <div className={styleFooter["logo-container"]}></div>
      <div className={styleFooter["section"]}>
        <ul className={styleFooter["text"]}>contact</ul>
        <ul className={styleFooter["text"]}>news</ul>
      </div>
      <div className={styleFooter["section"]}>
        <ul className={styleFooter["text"]}> terminals</ul>
        <ul className={styleFooter["second-text"]}>Cargo Terminal</ul>
        <ul className={styleFooter["second-text"]}>Container Terminal </ul>
        <ul className={styleFooter["second-text"]}>grain terminal</ul>
      </div>
      <div className={styleFooter["section"]}>
        <ul className={styleFooter["text"]}>Business Opportunities</ul>
        <ul className={styleFooter["text"]}>Ship Schedule</ul>
        <ul className={styleFooter["text"]}>About the Company </ul>
      </div>
    </div>
  );
};
