import React from 'react';
import Link from 'next/link';

import './nav.css';
import ActiveLink from './active-link/active-link';

export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav-Inner container">
        <Link href="/">
          <a><img className="Nav-Logo" src="/logo.svg" /></a>
        </Link>
        <div>
          <div className="Nav-Links">
            <ActiveLink href="/about">about</ActiveLink>
            <ActiveLink href="/work">work</ActiveLink>
            <ActiveLink href="/contact">contact</ActiveLink>
          </div>
          <button className="Nav-ExpandButton">
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>
    </nav>
  );
}
