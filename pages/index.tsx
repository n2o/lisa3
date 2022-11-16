import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-blue-500 dark:text-red-500">
        Welcome to <Link href="https://nextjs.org">Next.js!</Link>
      </h1>
    </Layout>
  );
}
