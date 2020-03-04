import React from "react";
import Head from "next/head";
import Nav from "../../components/nav";

import "./imprint.css";

export default function Imprint(props) {
  return (
    <div>
      <Head>
        <title>schmiede.one - Impressum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <article className="Imprint">
        <main className="Imprint-Main container">
          <h1>Impressum</h1>
          <h2>schmiede.one GmbH &amp; Co. KG</h2>
          <section>
            <p>Scheibenstraße 49</p>
            <p>40479 Düsseldorf</p>
            <p>Telefon 0151 112 075 39</p>
            <p>E-Mail: hello@schmiede.one</p>
            <p>Internet: https://schmiede.one</p>
            <h3>Umsatzsteuer-Identifikationsnummer:</h3>
            <p>68/209/05274</p>
            <h3>Rechtsform:</h3>
            <p>Gesellschaft mit beschränkter Haftung, Sitz Damme, Amtsgericht Oldenburg HR A 205333</p>
            <h3>Persönliche Gesellschafterin:</h3>
            <p>Schmiede.ONE Beteiligungs GmbH, Sitz Damme, Amtsgericht Oldenburg HR B 211812.</p>
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
