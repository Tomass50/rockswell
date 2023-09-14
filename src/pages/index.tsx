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
import NewsContainer from "@/components/NewsSection/components/NewsContainer";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <MainImage />
      <Container>
        <div className={stylesAbout["main-container"]}>
          <AboutSection />
        </div>
        <div className={stylesOper["main-container"]}>
          <OperSection />
        </div>
        <div className={stylesNews["main-container"]}>
          <NewsSection />
        </div>
      </Container>
    </main>
  );
}
