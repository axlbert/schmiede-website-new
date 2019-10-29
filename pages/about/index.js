import React from 'react';

import './about.css';
import Nav from '../../components/nav'

export default function About() {
  return (
    <div className="About">
      <Nav />
      <header>
        <img className="About-HeaderImage" src="/about.jpg" />
      </header>
    </div>
  );
}
