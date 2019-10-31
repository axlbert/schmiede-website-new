import React from 'react';
import Head from 'next/head';

import './homepage.css';

const HomepageState = {
  INITIAL: 0,
  US: 1,
  PROJECTS: 2,
};

const initialState = {
  title: 'We move heavy metal',
  subtitle: 'Hi there, would you like to know about:',
  links: [
    {
      label: 'us',
      href: '/',
      onClick: e => {},
    },
    {
      label: 'projects',
      href: '/',
      onClick: e => {},
    },
  ],
};
const usState = {
  title: 'Want to go deeper?',
  subtitle: 'Choose whatever you want to know about us:',
  links: [
    {
      label: 'culture',
      href: '/',
      onClick: e => {},
    },
    {
      label: 'team',
      href: '/',
      onClick: e => {},
    },
  ],
};
const projectsState = {
  title: 'Want to go deeper?',
  subtitle: 'Choose between out projects\' subjects:',
  links: [
    {
      label: 'robotics',
      href: '/',
      onClick: e => {},
    },
    {
      label: 'development',
      href: '/',
      onClick: e => {},
    },
  ],
};

function Main({ title, subtitle, links }) {
  const renderLinks = () => links.map((x, i) => (
    <li key={i} className="Homepage-MenuItem">
      <a href={x.href} className="Homepage-MenuLink">{ x.label }</a>
    </li>
  ));

  return (
    <main className="Homepage-Main container">
      <div style={{ marginBottom: '0.5rem' }}>
        <span className="Homepage-Title">{ title }</span>
      </div>
      <div>
        <span className="Homepage-Subtitle">{ subtitle }</span>
      </div>

      <ul className="Homepage-Menu">
        { renderLinks() }
      </ul>
    </main>
  );
}

export default function Homepage() {
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
            <a href="#" className="Homepage-LogoLink">
              <img className="Homepage-Logo" src="/logo-white.png" alt="Logo" />
            </a>
          </div>
        </section>

        <div className="container">
          <Main {...projectsState} />
        </div>

        <section className="Homepage-MoreLinkWrapper container">
          <a href="#" className="Homepage-MoreLink">
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
        </section>
      </article>
    </div>
  );
}

// Want to go deeper?

// Hi there, would you like to know about:
// Choose between out projects' subjects:
// Choose whatever you want to know about us:

/*

<li className="Homepage-MenuItem">Us</li>
            <li className="Homepage-MenuItem">Projects</li>

*/

/*

<li className="Homepage-MenuItem">Culture</li>
            <li className="Homepage-MenuItem">Team</li>
            <li className="Homepage-MenuItem">Office</li>
            <li className="Homepage-MenuItem">Join Us</li>

*/

/*

<li className="Homepage-MenuItem">Robotics</li>
            <li className="Homepage-MenuItem">Development</li>
            <li className="Homepage-MenuItem">Farming</li>

*/
