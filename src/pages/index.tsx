import Image from "next/image";
import Medal from "../assets/Medal.svg";
import Forklift from "../assets/Forklift.svg";
import Earth from "../assets/Earth.svg";
import CheckBlack from "../assets/CheckBlack.svg";
import CargoShip from "../assets/CargoShip.svg";
import Cargo from "../assets/Cargo.svg";
import stylesBg from "@/styles/bg.module.css";
import stylesAbout from "@/styles/about.module.css";
import stylesOper from "@/styles/operations.module.css";
import stylesNews from "@/styles/news.module.css";
import stylesBtn from "@/styles/headerBtn.module.css";
import Bg from "../assets/Main screen.jpg";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <Image
        className={stylesBg["bg-image"]}
        alt="bg-image"
        objectFit="cover"
        width={10000}
        height={10000}
        src={Bg}
      />
      <Container>
        <div className={stylesAbout["main-container"]}>
          <div className={stylesAbout["header-container"]}>
            <h1 className={stylesAbout["header-text"]}>about company</h1>
          </div>
          <div className={stylesAbout["about-container"]}>
            <div className={stylesAbout["first-section"]}>
              <div className={stylesAbout["container"]}>
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
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br /> lorem tristique aliquam ut quam.
                  </ul>
                  <ul className={stylesAbout["text"]}>
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br /> lorem tristique aliquam ut quam.
                  </ul>
                  <ul className={stylesAbout["text"]}>
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br /> lorem tristique aliquam ut quam.
                  </ul>
                </div>
              </div>
              <div className={stylesAbout["container"]}>
                <div className={stylesAbout["icon-text-container"]}>
                  <div className={stylesAbout["icon"]}>
                    <Image className="" src={Forklift} alt=""></Image>
                  </div>
                  <div className={stylesAbout["icon-text"]}>
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div className={stylesAbout["text-container"]}>
                  <ul className={stylesAbout["text"]}>
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br /> lorem tristique aliquam ut quam.
                  </ul>
                  <ul className={stylesAbout["text"]}>
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br /> lorem tristique aliquam ut quam.
                  </ul>
                  <ul className={stylesAbout["text"]}>
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br /> lorem tristique aliquam ut quam.
                  </ul>
                </div>
              </div>
            </div>
            <div className={stylesAbout["second-section"]}>
              <div className={stylesAbout["container"]}>
                <div className={stylesAbout["icon-text-container"]}>
                  <div className={stylesAbout["icon"]}>
                    <Image className="" src={Earth} alt=""></Image>
                  </div>
                  <div className={stylesAbout["icon-text"]}>
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div className={stylesAbout["text-container"]}>
                  <ul
                    className={`${stylesAbout["text-check"]} ${stylesAbout["text"]}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br />
                    lorem tristique aliquam ut quam.
                  </ul>
                  <ul
                    className={`${stylesAbout["text-check"]} ${stylesAbout["text"]}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br />
                    lorem tristique aliquam ut quam.
                  </ul>
                  <ul
                    className={`${stylesAbout["text-check"]} ${stylesAbout["text"]}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br />
                    lorem tristique aliquam ut quam.
                  </ul>
                </div>
              </div>
              <div className={stylesAbout["container"]}>
                <div className={stylesAbout["icon-text-container"]}>
                  <div className={stylesAbout["icon"]}>
                    <Image className="" src={CheckBlack} alt=""></Image>
                  </div>
                  <div className={stylesAbout["icon-text"]}>
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
                <div className={stylesAbout["text-container"]}>
                  <ul
                    className={`${stylesAbout["text-check"]} ${stylesAbout["text"]}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br />
                    lorem tristique aliquam ut quam.
                  </ul>
                  <ul
                    className={`${stylesAbout["text-check"]} ${stylesAbout["text"]}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br />
                    lorem tristique aliquam ut quam.
                  </ul>
                  <ul
                    className={`${stylesAbout["text-check"]} ${stylesAbout["text"]}`}
                  >
                    Lorem ipsum dolor sit amet consectetur. Lorem nullam libero{" "}
                    <br />
                    lorem tristique aliquam ut quam.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={stylesOper["main-container"]}>
          <div className={stylesOper["header-text-container"]}>
            <h2 className={stylesOper["header"]}>company operations</h2>
            <p className={stylesOper["text-header"]}>
              Lorem ipsum dolor sit amet consectetur. Consequat mattis id magna
              sit auctor elementum et. Aliquet purus pellentesque neque in.
            </p>
          </div>
          <div className={stylesOper["screen"]}></div>
          <div className={stylesOper["operations-container"]}>
            <div className={stylesOper["operations"]}>
              <div className={stylesOper["icon-text-container"]}>
                <Image className="" src={CargoShip} alt=""></Image>
                <p className={stylesOper["icon-text"]}>Stevedoring services:</p>
              </div>
              <ul className={stylesOper["text-list"]}>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet consectetur. Gravida feugiat <br />{" "}
                  sit vitae nulla turpis molestie a.
                </li>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet consectetur. Gravida feugiat <br />{" "}
                  sit vitae nulla turpis molestie a.
                </li>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet consectetur. Gravida feugiat <br />{" "}
                  sit vitae nulla turpis molestie a.
                </li>
              </ul>
            </div>
            <div className={stylesOper["operations"]}>
              <div className={stylesOper["icon-text-container"]}>
                <Image className="" src={Cargo} alt=""></Image>
                <p className={stylesOper["icon-text"]}>
                  Handling of containers:
                </p>
              </div>
              <ul className={stylesOper["text-list"]}>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet consectetur. Gravida feugiat <br />{" "}
                  sit vitae nulla turpis molestie a.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={stylesNews["main-container"]}>
          <div className={stylesNews["header-container"]}>
            <h2 className={stylesNews["header-text"]}>news</h2>
          </div>
          <div className={stylesNews["block-news"]}>
            <div className={stylesNews["news-container"]}>
              <div className={stylesNews["news-screen"]}></div>
              <div className={stylesNews["news-data-container"]}>
                <p className={stylesNews["data-text"]}>20</p>
                <p className={stylesNews["data-text"]}>August</p>
                <p className={stylesNews["data-text"]}>2023</p>
              </div>
              <div className={stylesNews["news-header-container"]}>
                <h2 className={stylesNews["header"]}>Test of the shiploader</h2>
              </div>
              <div className={stylesNews["news-text-container"]}>
                <p className={stylesNews["news-text"]}>
                  Lorem ipsum dolor sit amet consectetur. Metus ac leo ut sit{" "}
                  <br /> vulputate duis blandit. Quam sed ridiculus malesuada
                  nulla <br /> volutpat massa.
                </p>
              </div>
              <button
                className={`${stylesBtn["btn-container"]} ${stylesNews["btn-container"]}`}
              >
                Read
              </button>
            </div>
            <div className={stylesNews["news-container"]}>
              <div className={stylesNews["news-screen"]}></div>
              <div className={stylesNews["news-data-container"]}>
                <p className={stylesNews["data-text"]}>20</p>
                <p className={stylesNews["data-text"]}>August</p>
                <p className={stylesNews["data-text"]}>2023</p>
              </div>
              <div className={stylesNews["news-header-container"]}>
                <h2 className={stylesNews["header"]}>Test of the shiploader</h2>
              </div>
              <div className={stylesNews["news-text-container"]}>
                <p className={stylesNews["news-text"]}>
                  Lorem ipsum dolor sit amet consectetur. Metus ac leo ut sit{" "}
                  <br /> vulputate duis blandit. Quam sed ridiculus malesuada
                  nulla <br /> volutpat massa.
                </p>
              </div>
              <button
                className={`${stylesBtn["btn-container"]} ${stylesNews["btn-container"]}`}
              >
                Read
              </button>
            </div>
            <div className={stylesNews["news-container"]}>
              <div className={stylesNews["news-screen"]}></div>
              <div className={stylesNews["news-data-container"]}>
                <p className={stylesNews["data-text"]}>20</p>
                <p className={stylesNews["data-text"]}>August</p>
                <p className={stylesNews["data-text"]}>2023</p>
              </div>
              <div className={stylesNews["news-header-container"]}>
                <h2 className={stylesNews["header"]}>Test of the shiploader</h2>
              </div>
              <div className={stylesNews["news-text-container"]}>
                <p className={stylesNews["news-text"]}>
                  Lorem ipsum dolor sit amet consectetur. Metus ac leo ut sit{" "}
                  <br /> vulputate duis blandit. Quam sed ridiculus malesuada
                  nulla <br /> volutpat massa.
                </p>
              </div>
              <button
                className={`${stylesBtn["btn-container"]} ${stylesNews["btn-container"]}`}
              >
                Read
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
