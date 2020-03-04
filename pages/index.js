import React, { useState, Component, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

import "./homepage.css";
import Main from "../components/homepage/main";
import HomepageScreen from "../components/homepage/homepage-screen.enum";

import { initGA, forceInitGA } from "../utils/analytics";

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
  constructor(props) {
    super(props);
    this.state = {
      mainScreen: HomepageScreen.INITIAL
    };
    this.setMainScreen = this.setMainScreen.bind(this);
  }

  componentDidMount() {
    initGA();
  }

  setMainScreen() {
    this.setState({
      mainScreen: HomepageScreen.INITIAL
    });
  }
  render() {
    const handleLogoClick = e => {
      e.preventDefault();
      setMainScreen(HomepageScreen.INITIAL);
    };

    const cookieBtn = {
      fontFamily: "'Barlow', sans-serif",
      fontSize: "1em",
      padding: ".4em .8em",
      backgroundColor: "#df1720",
      color: "white"
    };

    return (
      <div>
        <Head>
          <title>Schmiede.one Innovation Lab</title>
          <link rel="icon" href="/favicon.ico" />
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
                <img
                  className="Homepage-Logo"
                  src="/logo-white.png"
                  alt="Logo"
                />
              </a>
            </div>
          </section>

          <main className="Homepage-Main container">
            <Main
              screen={this.state.mainScreen}
              onScreenChange={this.setMainScreen}
            />
          </main>

          <section className="Homepage-MoreLinkWrapper container">
            <div>
              <Link href="/imprint/">
                <a className="Homepage-Link">imprint</a>
              </Link>
              <Link href="/privacy-policy/">
                <a className="Homepage-Link">privacy policy</a>
              </Link>
            </div>
            <Link href="/about/">
              <a className="Homepage-MoreLink">
                <span>
                  <span style={{ whiteSpace: "nowrap" }}>Click here</span>{" "}
                  <span style={{ whiteSpace: "nowrap" }}>
                    to simply browse the website
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
        <CookieConsent
          style={{ fontFamily: "'Barlow', sans-serif" }}
          buttonText="Zustimmen"
          buttonStyle={cookieBtn}
          enableDeclineButton
          declineButtonText="Ablehnen"
          declineButtonStyle={{ ...cookieBtn, backgroundColor: "#282828" }}
          acceptOnScroll={false}
          onAccept={() => forceInitGA()}
        >
          Auch wir nutzen Cookies, um das Nutzungserlebnis der Seite für Sie zu
          optimieren. Weiter Informationen können Sie unseren{" "}
          <Link href="/privacy-policy">
            <a>Datenschutzbestimmungen</a>
          </Link>{" "}
          entnehmen.
        </CookieConsent>
      </div>
    );
  }
}
