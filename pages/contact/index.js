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
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <div>We are here for you</div>
              <div>Drop us a line, call us, or even visit us.</div>
            </div>
            <div className="col-3">
              <h2>Mail</h2>
              <p>hello@schmiede.one</p>
              <h2>Phone</h2>
              <p>+49 (0) 211 97 63 49 26</p>
            </div>
            <div className="col-3">
              <h2>Office</h2>
              <p>Schmiede.ONE GmbH &amp; Co. KG </p>
              <p>Rather Straße 25</p>
              <p>40476, Düsseldorf </p>
              <p>Germany</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
