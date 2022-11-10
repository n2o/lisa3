import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbarrr from "../components/Navbarrr";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Navbarrr></Navbarrr>
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="https://nextjs.org">Next.js!</Link>
          </h1>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
