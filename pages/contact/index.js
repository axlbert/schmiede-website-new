import React from 'react';

import './contact.css';
import Nav from '../../components/nav';

export default function Contact() {
  return (
    <div>
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

        <div className="container">
          <section className="Contact-TitleBlock">
            <div>
              <span className="Contact-Title">
                We are here for you
              </span>
            </div>
            <span className="Contact-Subtitle">
              Drop us a line, call us, or even visit us.
            </span>
          </section>
          

          <section className="Contact-InfoBlock">
            <div>
              <span className="Contact-Heading">Mail</span>
              <span className="Contact-Paragraph">
                <a className="Contact-MailLink" href="#">hello@schmiede.one</a>
              </span>
            </div>

            <div>
              <span className="Contact-Heading">Phone</span>
              <span className="Contact-Paragraph">+49 (0) 211 97 63 49 26</span>
            </div>

            <div>
              <span className="Contact-Heading">Office</span>
              <span className="Contact-Paragraph">Schmiede.ONE GmbH &amp; Co. KG</span>
              <span className="Contact-Paragraph">Rather Straße 25 </span>
              <span className="Contact-Paragraph">40476, Düsseldorf </span>
              <span className="Contact-Paragraph">Germany</span>
            </div>
          </section>

          <section className="Contact-SocialBlock">
            <a className="Contact-SocialLink" href="#" title="Instagram">
              <img src="/contact/instagram.svg" alt="Instagram" />
            </a>
            <a className="Contact-SocialLink" href="#" title="Facebook">
              <img src="/contact/facebook.svg" alt="Facebook" />
            </a>
            <a className="Contact-SocialLink" href="#" title="LinkedIn">
              <img src="/contact/linkedin.svg" alt="LinkedIn" />
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
