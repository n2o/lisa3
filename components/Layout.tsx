import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Props } from "./commonTypes";
import Footer from "./Footer";
import Navbarrr from "./Navbarrr";

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbarrr />
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
