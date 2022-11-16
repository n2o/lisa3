/* eslint-disable @next/next/no-img-element */
import { Card } from "flowbite-react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <img
          src="/img/sandbank.webp"
          alt="Hintergrundbild. Man sieht links und rechts Berge, in der Mitte eine Sandbank im Fluss."
        />
        <div className="absolute rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-gray-600/50">
          <div className="text-white py-1 text-xl md:text-2xl xl:text-4xl">
            &quot;Vielleicht stehen wir uns manchmal selbst im Weg, damit wir
            über unsere Bedürfnisse stolpern&quot;
          </div>
        </div>
      </div>

      <section className="content pt-5">
        <Card>
          <h1>Herzlich Willkommen</h1>
          <p>
            Sehen wir uns nicht alle bei Zeit im Alltag gewissen
            Herausforderungen ausgesetzt, die in einem Moment kaum der Rede wert
            sind und an anderer Stelle schier unüberwindbar scheinen? Viel zu
            oft geraten wir im Leben in Situationen, die wir als Experten in
            eigener Sache ohne weiteres zu lösen wüssten, wenn da nicht all die
            äußeren Einflüsse und/oder individuellen Gedankenmodelle wären, die
            einen konstruktiven, selbstsicheren Blick auf die Dinge erschweren.
          </p>
          <p>
            Trotz der Vielzahl an Angeboten scheint die Hemmschwelle sich dann
            Unterstützung zu suchen immer noch sehr hoch. So sei Ihnen an dieser
            Stelle gesagt:
          </p>
          <p>Den ersten Schritt zur Veränderung haben Sie bereits gemacht!</p>
        </Card>
      </section>
    </Layout>
  );
}
