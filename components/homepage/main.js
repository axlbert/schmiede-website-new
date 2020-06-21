import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import './menu.css';
import HomepageScreen from './homepage-screen.enum';
import {
  initialContents,
  usContents,
  projectsContents,
} from './screens-contents';
import Link from 'next/link';

/**
 * Homepage main (tag) component.
 */
export default function Main({ screen, onScreenChange }) {
  const [homepageState, setHomepageState] = useState(screen);
  const [contents, setContents] = useState(initialContents);
  const router = useRouter();

  useEffect(() => {
    switch (homepageState) {
      case HomepageScreen.US: {
        setContents(usContents);
        break;
      }
      case HomepageScreen.PROJECTS: {
        setContents(projectsContents);
        break;
      }
      default: setContents(initialContents);
    }
    onScreenChange(homepageState);
  }, [homepageState]);

  useEffect(() => {
    setHomepageState(screen);
  }, [screen]);

  /*function updateHomepageState(_screen) {
    const menuElement = document.querySelector('.MainMenu');
    menuElement.classList.remove('MainMenu_fade');
    setTimeout(() => {
      setHomepageState(state => {
        menuElement.classList.add('MainMenu_fade');
        return _screen;
      });
    }, 700);
  }*/

  const renderLinks = () => contents.links.map((x, i) => {
    const handleClick = e => {
      e.preventDefault();
      if (x.screen) {
        setHomepageState(x.screen);
      } else {
        router.push(x.href);
      }
    };
    return (<li key={i} className="Homepage-MenuItem">
      <a
        className="Homepage-MenuLink"
        href={x.href}
        onClick={handleClick}
      >
        { x.label }
      </a>
    </li>);
  });

  return (
    <div>
      <div style={{ marginBottom: '0.5rem' }}>
        <span className="Homepage-Title">{ contents.title }</span>
      </div>
      <div>
        <span className="Homepage-Subtitle">{ contents.subtitle }</span>
      </div>

      <ul className="Homepage-Menu">
        { renderLinks() }
      </ul>
    </div>
  );
}
