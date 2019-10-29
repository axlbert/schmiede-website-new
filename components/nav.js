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
          <ActiveLink href="/about">about</ActiveLink>
          <ActiveLink href="/work">work</ActiveLink>
          <ActiveLink href="/contact">contact</ActiveLink>
        </div>
      </div>
    </nav>
  );
}


/*

<Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/work">
            <a>work</a>
          </Link>
          <Link href="/contact">
            <a>contact</a>
          </Link>

*/

/*const links = [
  { href: '/about', label: 'About' },
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})*/

/*const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)*/

//export default Nav
