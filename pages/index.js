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
          <div className="Homepage-Title">We move heavy metal</div>
          <div className="Homepage-Subtitle">
            Hi there, would you like to know about:
          </div>
          <ul>
            <li>Culture</li>
            <li>Team</li>
            <li>Office</li>
            <li>Join Us</li>
          </ul>
        </section>

        <section className="container" style={{ paddingBottom: '1.5rem' }}>
          <div>
            Don’t know yet? You can browse around our website at any time.
          </div>
        </section>
      </article>
    </div>
  );
}

// Choose whatever you want to know about us:
