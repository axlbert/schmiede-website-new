import React from 'react';
import Head from 'next/head';

import './homepage.css';

export default function Homepage() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article className="Homepage">
        <section className="container">
          <div className="Homepage-NavStub">
            <a href="#" className="Homepage-LogoLink">
              <img className="Homepage-Logo" src="/logo-white.png" alt="Logo" />
            </a>
          </div>
        </section>
        <section className="container">
          homepage
        </section>
      </article>
    </div>
  );
}
