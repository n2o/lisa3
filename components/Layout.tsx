import Head from "next/head";
import { Props } from "./commonTypes";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      {/* <Navbarrr /> */}
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
