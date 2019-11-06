import React from 'react';
import Head from 'next/head';

import './contact.css';
import Nav from '../../components/nav';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>schmiede.one - Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      <article className="Contact">
        <header className="Contact-HeaderSmall">
          <img
            className="Contact-Image"
            src="/contact/contact-small.jpg"
            alt="Contact"
          />
        </header>
        <header className="Contact-HeaderLarge">
          <div className="container">
            <img
              className="Contact-Image"
              src="/contact/contact.jpg"
              alt="Contact"
            />
          </div>
        </header>

        <main className="container">
          <section className="Contact-TitleSection">
            <div>
              <span className="Contact-Title">
                We are here for you
              </span>
            </div>
            <span className="Contact-Subtitle">
              Drop us a line, call us, or even visit us.
            </span>
          </section>

          <section className="Contact-InfoSection">
            <div className="Contact-InfoBlock">
              <span className="Contact-Heading">Mail</span>
              <span className="Contact-Paragraph">
                <a className="Contact-MailLink" href="#">
                  hello@schmiede.one
                </a>
              </span>
              <span className="Contact-Heading">Phone</span>
              <span className="Contact-Paragraph">
                +49 (0) 211 97 63 49 26
              </span>
            </div>

            <div className="Contact-InfoBlock">
              <span className="Contact-Heading">Office</span>
              <span className="Contact-Paragraph">
                Schmiede.ONE GmbH &amp; Co. KG
              </span>
              <span className="Contact-Paragraph">Rather Straße 25</span>
              <span className="Contact-Paragraph">40476, Düsseldorf</span>
              <span className="Contact-Paragraph">Germany</span>
            </div>
          </section>

          <section className="Contact-SocialSection">
            <a className="Contact-SocialLink" href="#" title="Instagram">
              <img
                className="Contact-SocialImage"
                src="/contact/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a className="Contact-SocialLink" href="#" title="Facebook">
              <img
                className="Contact-SocialImage"
                src="/contact/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a className="Contact-SocialLink" href="#" title="LinkedIn">
              <img
                className="Contact-SocialImage"
                src="/contact/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </section>
        </main>
      </article>
    </div>
  );
}
