import React, { useEffect, useState } from 'react';

import HomepageState from './homepage-state.enum';
import { initialScreen, usScreen, projectsScreen } from './main-screens';

/**
 * Homepage main (tag) component.
 */
export default function Main() {
  const [homepageState, setHomepageState] = useState(initialScreen);
  const [contents, setContents] = useState(initialScreen);

  useEffect(() => {
    switch (homepageState) {
      case HomepageState.US: {
        setContents(usScreen);
        break;
      }
      case HomepageState.PROJECTS: {
        setContents(projectsScreen);
        break;
      }
      default: setContents(initialScreen);
    }
  }, [homepageState]);

  const renderLinks = () => contents.links.map((x, i) => {
    const handleClick = e => {
      if (x.state) {
        e.preventDefault();
        setHomepageState(x.state);
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
    <main className="Homepage-Main container">
      <div style={{ marginBottom: '0.5rem' }}>
        <span className="Homepage-Title">{ contents.title }</span>
      </div>
      <div>
        <span className="Homepage-Subtitle">{ contents.subtitle }</span>
      </div>

      <ul className="Homepage-Menu">
        { renderLinks() }
      </ul>
    </main>
  );
}
