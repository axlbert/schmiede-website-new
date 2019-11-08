import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import './work.css';
import Nav from '../../components/nav';
import PostSection from '../../components/post-section';
import PostTag from '../../components/post-tag.enum';

export default function Work() {
  const [filter, setFilter] = useState(PostTag.ALL);

  useEffect(() => {
    const hash = window.location.hash;
    let _filter;
    switch (hash) {
      case '#robotics': {
        _filter = PostTag.ROBOTICS;
        break;
      }
      case '#development': {
        _filter = PostTag.DEVELOPMENT;
        break;
      }
      case '#farming': {
        _filter = PostTag.FARMING;
        break;
      }
      default: _filter = PostTag.ALL;
    }
    setFilter(_filter);
  }, []);

  return (<div>
    <Head>
      <title>schmiede.one - Work</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />
    <article className="Work">
      <main className="Work-Main container">
        <PostSection filter={filter} />
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
            We are always looking for<br />
            opportunities to grow.
          </span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="Banner-Subtitle">
            We would love to hear from you. Let’s talk about it.
          </span>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <a href="mailto:hello@schmiede.one">
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

/*

HEADER CAROUSEL BACKUP

<header className="Work-HeaderCarouselSmall">
  <PostCarousel />
</header>
<header className="Work-HeaderCarouselLarge container">
  <PostCarousel />
</header>

*/
