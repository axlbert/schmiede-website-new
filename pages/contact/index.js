import React from 'react';

import './contact.css';
import Nav from '../../components/nav';

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="Contact">
        <div className="container">
          <img className="Contact-Image" src="/contact.jpg" />
        </div>

        <div className="container">
          <div>
            <div className="Contact-TitleBlock">
              <div className="Contact-Title">We are here for you</div>
              <div className="Contact-Subtitle">
                Drop us a line, call us, or even visit us.
              </div>
            </div>

            <div className="Contact-DataBlocks">
              <div className="Contact-DataBlock">
                <div className="Contact-Heading">Mail</div>
                <div className="Contact-Paragraph">hello@schmiede.one</div>
                <div className="Contact-Heading">Phone</div>
                <div className="Contact-Paragraph">+49 (0) 211 97 63 49 26</div>
              </div>
              <div className="Contact-DataBlock">
                <div className="Contact-Heading">Office</div>
                <div className="Contact-Paragraph">Schmiede.ONE GmbH &amp; Co. KG</div>
                <div className="Contact-Paragraph">Rather Straße 25</div>
                <div className="Contact-Paragraph">40476, Düsseldorf </div>
                <div className="Contact-Paragraph">Germany</div>
              </div>
            </div>

            <div className="Contact-SocialBlock">
              <a className="mr-4" href="#">
                <img
                  className="Contact-SocialImage"
                  src="/instagram.svg"
                  alt="Instagram"
                />
              </a>
              <a className="mr-4" href="#">
                <img
                  className="Contact-SocialImage"
                  src="/facebook.svg"
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <img
                  className="Contact-SocialImage"
                  src="/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
