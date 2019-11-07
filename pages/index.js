import React, { useState, Component, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import './homepage.css';
import Main from '../components/homepage/main';
import HomepageScreen from '../components/homepage/homepage-screen.enum';

import { initGA, logPageView } from '../utils/analytics';

/**
 * Homepage component.
 */

/*
const [windowInnerWidth, setInnerWidth] = useState(0);
function setRelativeVH() {
  const newWidth = window.innerWidth;
  if (newWidth !== windowInnerWidth) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    setInnerWidth(newWidth);
  }
}
useEffect(() => {
  setRelativeVH();
  window.addEventListener('resize', setRelativeVH);
  return () => window.removeEventListener('resize', setRelativeVH); 
});
// end height-100 fix
*/



export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      mainScreen : HomepageScreen.INITIAL,
    }
    this.setMainScreen = this.setMainScreen.bind(this);
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  setMainScreen(_screen) {
    this.setState({
      mainScreen: _screen
    });
  }

  render() {
    const handleLogoClick = e => {
      e.preventDefault();
      this.setMainScreen(HomepageScreen.INITIAL);
    };

    return (
      <div>
        <Head>
          <title>Schmiede.one Innovation Lab</title>
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
  
          <main className="Homepage-Main container">
            <Main screen={this.state.mainScreen} onScreenChange={this.setMainScreen} />
          </main>
  
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
                  src="/arrow-right-button.svg"
                  alt="Visit website"
                />
              </a>
            </Link>
          </section>
        </article>
      </div>
    );

  }

  
}
