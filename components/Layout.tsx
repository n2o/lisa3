import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbarrr from "./Navbarrr";
import styles from "../styles/Home.module.css";

export default function Layout({ children }): JSX.Element {
  return (
    <>
      <Navbar />
      <Navbarrr />
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
