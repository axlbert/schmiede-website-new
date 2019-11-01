import React, { useState } from 'react';
import Link from 'next/link';
import { Drawer } from '@material-ui/core';

import './nav.css';
import './drawer.css';
import ActiveLink from './active-link/active-link';
import DrawerLink from './drawer-link';

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(x => !x);
  };

  return (
    <nav className="Nav">
      <div className="Nav-Inner container">
        <Link href="/">
          <a className="Nav-LogoLink">
            <img className="Nav-Logo" src="/logo.svg" />
          </a>
        </Link>
        <div>
          <div className="Nav-Links">
            <ActiveLink href="/about">about</ActiveLink>
            <ActiveLink href="/work">work</ActiveLink>
            <ActiveLink href="/contact">contact</ActiveLink>
          </div>
          <button className="Nav-ExpandButton" onClick={toggleDrawer}>
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div className="Drawer-Content">
          <div style={{ textAlign: 'right' }}>
            <button>
              X
            </button>
          </div>
          <ul className="DrawerMenu">
            <li className="DrawerMenu-Item">
              <DrawerLink href="/about">About</DrawerLink>
            </li>
            <li className="DrawerMenu-Item">
              <DrawerLink href="/work">Work</DrawerLink>
            </li>
            <li className="DrawerMenu-Item">
              <DrawerLink href="/contact">Contact</DrawerLink>
            </li>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
}
