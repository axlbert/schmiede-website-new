import Head from "next/head";
import React from "react";
import Nav from "../../components/nav";
import "./imprint.css";

export default function Imprint(props) {
  return (
    <div>
      <Head>
        <title>Schmiede.one - Impressum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <article className="Imprint">
        <main className="Imprint-Main container">
          <h1>Impressum</h1>
          <h2>Schmiede.one GmbH &amp; Co. KG</h2>
          <section>
            <p>Scheibenstraße 49</p>
            <p>40479 Düsseldorf</p>
            <p>
              Telefon:{" "}
              <a target="_blank" href="tel:+4921197634953">
                +49 (0) 211 97 63 49 53
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a target="_blank" href="mailto:hello@schmiede.one">
                hello@schmiede.one
              </a>
            </p>
            <p>Internet: https://schmiede.one</p>
            <h3>Umsatzsteuer-Identifikationsnummer:</h3>
            <p>68/209/05274</p>
            <h3>Rechtsform:</h3>
            <p>
              Gesellschaft mit beschränkter Haftung, Sitz Damme, Amtsgericht
              Oldenburg HR A 205333
            </p>
            <h3>Persönliche Gesellschafterin:</h3>
            <p>
              Schmiede.one Beteiligungs GmbH, Sitz Damme, Amtsgericht Oldenburg
              HR B 211812.
            </p>
          </section>
          <section>
            <h3>Geschäftsführer:</h3>
            <p>Herr Christoph Grimme</p>
            <p>Herr Alexander Langer</p>
          </section>
        </main>
      </article>
    </div>
  );
}
