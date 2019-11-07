import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import './menu.css';
import HomepageScreen from './homepage-screen.enum';
import {
  initialContents,
  usContents,
  projectsContents,
} from './screens-contents';

/**
 * Homepage main (tag) component.
 */
export default function Main({ screen, onScreenChange }) {
  const [contents, setContents] = useState(initialContents);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let _contents;
    const menuElement = document.querySelector('.MainMenu');
    transitionEnabled && menuElement.classList.remove('MainMenu_fade');
    switch (screen) {
      case HomepageScreen.US: {
        _contents = usContents;
        break;
      }
      case HomepageScreen.PROJECTS: {
        _contents = projectsContents;
        break;
      }
      default: {
        _contents = initialContents;
      };
    }
    setTimeout(() => {
      setContents(prevState => {
        transitionEnabled && menuElement.classList.add('MainMenu_fade');
        setTransitionEnabled(true);
        return _contents;
      });
    }, 100);
  }, [screen]);

  const renderLinks = () => contents.links.map((x, i) => {
    const handleClick = e => {
      e.preventDefault();
      if (x.screen) {
        onScreenChange(x.screen);
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
    <div className="MainMenu MainMenu_fade">
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
