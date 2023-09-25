import Image from "next/image";
import stylesAbout from "@/styles/about.module.css";
import stylesOper from "@/styles/operations.module.css";
import stylesNews from "@/styles/news.module.css";
import stylesBtn from "@/styles/headerBtn.module.css";
import Container from "@/components/Container";
import MainImage from "@/components/MainImage";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import OperSection from "@/components/OperSection";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <MainImage />
      <Container>
        <div id="about-section" className={stylesAbout["main-container"]}>
          <AboutSection />
        </div>
        <div id="oper-section" className={stylesOper["main-container"]}>
          <OperSection />
        </div>
        <div id="news-section" className={stylesNews["main-container"]}>
          <NewsSection />
        </div>
      </Container>
    </main>
  );
}
