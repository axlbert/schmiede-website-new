import React, { useEffect, useState } from 'react';

const HomepageState = {
  INITIAL: 0,
  US: 1,
  PROJECTS: 2,
};

const initialState = {
  title: 'We move heavy metal',
  subtitle: 'Hi there, would you like to know about:',
  links: [
    {
      label: 'us',
      href: '/about',
      makeOnClick: setter => e => {
        e.preventDefault();
        setter(HomepageState.US);
      },
      state: HomepageState.US,
    },
    {
      label: 'projects',
      href: '/work',
      makeOnClick: setter => e => {
        e.preventDefault();
        setter(HomepageState.PROJECTS);
      },
      state: HomepageState.PROJECTS,
    },
  ],
};
const usState = {
  title: 'Want to go deeper?',
  subtitle: 'Choose whatever you want to know about us:',
  links: [
    {
      label: 'culture',
      href: '/about',
    },
    {
      label: 'team',
      href: '/about',
    },
    {
      label: 'office',
      href: '/about',
    },
    {
      label: 'join us',
      href: '/about',
    },
  ],
};
const projectsState = {
  title: 'Want to go deeper?',
  subtitle: 'Choose between out projects\' subjects:',
  links: [
    {
      label: 'robotics',
      href: '/work',
    },
    {
      label: 'development',
      href: '/work',
    },
    {
      label: 'farming',
      href: '/work',
    },
  ],
};

/**
 * Homepage main (tag) component.
 */
export default function Main() {
  const [homepageState, setHomepageState] = useState(initialState);
  const [contents, setContents] = useState(initialState);

  useEffect(() => {
    switch (homepageState) {
      case HomepageState.US: {
        setContents(usState);
        break;
      }
      case HomepageState.PROJECTS: {
        setContents(projectsState);
        break;
      }
      default: setContents(initialState);
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
