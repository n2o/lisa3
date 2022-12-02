/* eslint-disable @next/next/no-img-element */
import { Card } from "flowbite-react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Systemische Beratung Freund</title>
        <meta name="description" content="Systemische Beratung Freund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-96 bg-fixed bg-center bg-cover bg-[url('/img/sandbank.webp')]">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-40 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 dark:text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl">
                  &quot;Vielleicht stehen wir uns manchmal selbst im Weg, damit
                  wir über unsere Bedürfnisse stolpern&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="content pt-5">
        <Card>
          <h1 className="pt-0">Herzlich Willkommen</h1>
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
          <p className="italic">
            Den ersten Schritt zur Veränderung haben Sie bereits gemacht!
          </p>
        </Card>
      </section>
      <Profile />
    </Layout>
  );
}
