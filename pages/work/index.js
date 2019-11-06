import React from 'react';
import Head from 'next/head';

import './work.css';
import Nav from '../../components/nav';
import PostCarousel from '../../components/post-carousel';
import PostSection from '../../components/post-section';

export default function Work() {
  return (<div>
    <Head>
      <title>schmiede.one - Work</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />
    <article className="Work">
      <header className="Work-HeaderCarouselSmall">
        <PostCarousel />
      </header>
      <header className="Work-HeaderCarouselLarge container">
        <PostCarousel />
      </header>

      <main className="Work-Main container">
        <PostSection />
      </main>

      <footer
        className="Banner"
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          backgroundImage: 'url("/work/footer.jpg")',
          backgroundPositionX: '10%',
        }}
      >
        <div>
          <span className="Banner-Title">
            Do you have a cool idea<br />
            to share with us?
          </span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="Banner-Subtitle">
            We would love to hear from you. Let’s talk about it.
          </span>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <a href="#">
            <img
              className="Banner-RoundImage"
              src="/mail.svg"
              alt="Email"
            />
          </a>
        </div>
      </footer>
    </article>
  </div>);
}
