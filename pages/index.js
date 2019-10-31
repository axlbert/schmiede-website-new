import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import './homepage.css';
import Main from '../components/homepage/main';
import HomepageScreen from '../components/homepage/homepage-screen.enum';

/**
 * Homepage component.
 */
export default function Homepage() {
  const [mainScreen, setMainScreen] = useState(HomepageScreen.INITIAL);

  const handleLogoClick = e => {
    e.preventDefault();
    setMainScreen(HomepageScreen.INITIAL);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <article
        className="Homepage"
        style={{ backgroundImage: 'url("/homepage.jpg")' }}
      >
        <section className="container">
          <div className="Homepage-NavStub">
            <a
              className="Homepage-LogoLink"
              href="/"
              onClick={handleLogoClick}
            >
              <img className="Homepage-Logo" src="/logo-white.png" alt="Logo" />
            </a>
          </div>
        </section>

        <div className="container">
          <Main screen={mainScreen} onScreenChange={setMainScreen} />
        </div>

        <section className="Homepage-MoreLinkWrapper container">
          <Link href="/about">
            <a className="Homepage-MoreLink">
              <span>
                <span style={{ whiteSpace: 'nowrap' }}>
                  Don’t know yet? You can browse
                </span>
                {' '}
                <span style={{ whiteSpace: 'nowrap' }}>
                  around our website at any time.
                </span>
              </span>
              <img
                className="Homepage-MoreLinkImage"
                src="/arrow-right.svg"
                alt="Visit website"
              />
            </a>
          </Link>
        </section>
      </article>
    </div>
  );
}
