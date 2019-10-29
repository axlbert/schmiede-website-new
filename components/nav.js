import React from 'react';
import Link from 'next/link';

import './nav.css';

const links = [
  { href: '/about', label: 'About' },
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

export default function Nav() {
  return (
    <nav className="Nav">
      
        <div className="Nav-Inner container">
          <div>
            <img className="Nav-Logo" src="/logo.svg" />
          </div>
          <div>
            <a href="/about">about</a>
            <a href="/work">work</a>
            <a href="/contact">contact</a>
          </div>
        </div>
      
    </nav>
  );
}

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
