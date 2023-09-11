import Image from "next/image";
import CargoShip from "../assets/CargoShip.svg";
import Cargo from "../assets/Cargo.svg";
import stylesAbout from "@/styles/about.module.css";
import stylesOper from "@/styles/operations.module.css";
import stylesNews from "@/styles/news.module.css";
import stylesBtn from "@/styles/headerBtn.module.css";
import Container from "@/components/Container";
import MainImage from "@/components/MainImage";
import AboutSection from "@/components/AboutSection";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <MainImage />
      <Container>
        <div className={stylesAbout["main-container"]}>
          <AboutSection />
        </div>
        <div className={stylesOper["main-container"]}>
          <div className={stylesOper["header-text-container"]}>
            <Title className={stylesOper["header"]}>Company operations</Title>
            <p className={stylesOper["text-header"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque
              dolore dolores, doloribus ducimus error exercitationem fugiat
              fugit laboriosam laborum nam necessitatibus repudiandae rerum
              soluta sunt suscipit totam ut velit voluptas voluptatem!
              Architecto fuga harum incidunt iure minima nam necessitatibus,
              nesciunt perferendis, placeat, porro quam quo recusandae
              similique. Cumque dolorem doloremque dolorum et fugiat modi
              molestias mollitia natus necessitatibus nulla quidem reprehenderit
              rerum, sit unde velit? Commodi consequuntur corporis cum cumque
              distinctio eaque eius et eum, exercitationem fugit illum incidunt
              laborum libero minus molestias nobis obcaecati officiis provident
              recusandae, reiciendis rem saepe sit voluptas voluptate
              voluptates? Architecto doloremque ex illum nihil numquam officia
              reiciendis repellat soluta temporibus voluptatibus. Aliquam atque
              consequatur deleniti eaque exercitationem fugiat, impedit ipsum
              iste iusto libero maiores nihil, officia placeat praesentium
              quibusdam quidem suscipit tempora totam voluptatem voluptates?
              Corporis fugiat incidunt labore quis similique suscipit totam!
              Amet blanditiis doloremque error esse laborum quasi ratione
              temporibus vel, voluptates. Autem cupiditate deserunt eum harum
              ipsa, nostrum quia saepe tenetur. Blanditiis cumque cupiditate
              expedita explicabo inventore iste libero possimus saepe sed
              voluptatibus. Beatae cupiditate eaque explicabo, libero magnam
              quas quibusdam voluptatum? Delectus deleniti itaque laborum
              nesciunt numquam placeat? Aspernatur dolorem fugiat fugit incidunt
              nam nobis porro soluta vero voluptatibus?
            </p>
          </div>
          <div className={stylesOper["screen"]} />
          <div className={stylesOper["operations-container"]}>
            <div className={stylesOper["operations"]}>
              <div className={stylesOper["icon-text-container"]}>
                <Image className="" src={CargoShip} alt=""></Image>
                <p className={stylesOper["icon-text"]}>Stevedoring services:</p>
              </div>
              <ul className={stylesOper["text-list"]}>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aperiam assumenda consequatur culpa deserunt dolor dolores
                  expedita harum impedit labore maxime necessitatibus
                  perspiciatis qui, quibusdam, repellendus sit veniam veritatis
                  vitae!
                </li>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias doloremque, eligendi exercitationem impedit incidunt
                  minima numquam placeat provident reprehenderit sequi. Alias
                  architecto assumenda eligendi laudantium minus nesciunt
                  officia, quas quisquam!
                </li>
                <li className={stylesOper["text"]}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias doloremque, eligendi exercitationem impedit incidunt
                  minima numquam placeat provident reprehenderit sequi. Alias
                  architecto assumenda eligendi laudantium minus nesciunt
                  officia, quas quisquam!
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias doloremque, eligendi exercitationem impedit incidunt
                  minima numquam placeat provident reprehenderit sequi. Alias
                  architecto assumenda eligendi laudantium minus nesciunt
                  officia, quas quisquam!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={stylesNews["main-container"]}>
          <h2 className={stylesNews["header-text"]}>news</h2>
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
