import HomepageScreen from './homepage-screen.enum';

export const initialScreen = {
  title: 'We move heavy metal',
  subtitle: 'Hi there, would you like to know about:',
  links: [
    { label: 'us', href: '/about', state: HomepageScreen.US },
    { label: 'projects', href: '/work', state: HomepageScreen.PROJECTS },
  ],
};

export const usScreen = {
  title: 'Want to go deeper?',
  subtitle: 'Choose whatever you want to know about us:',
  links: [
    { label: 'culture', href: '/about' },
    { label: 'team', href: '/about' },
    { label: 'office', href: '/about' },
    { label: 'join us', href: '/about' },
  ],
};

export const projectsScreen = {
  title: 'Want to go deeper?',
  subtitle: 'Choose between out projects\' subjects:',
  links: [
    { label: 'robotics', href: '/work' },
    { label: 'development', href: '/work' },
    { label: 'farming', href: '/work' },
  ],
};
