import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/header.module.css";
import "@/styles/footer.module.css";
import "@/styles/formSearch.module.css";
import "@/styles/headerBtn.module.css";
import "@/styles/bg.module.css";
import "@/styles/about.module.css";
import "@/styles/operations.module.css";
import "@/styles/news.module.css";
import "@/styles/styles.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
