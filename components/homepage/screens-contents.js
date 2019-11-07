import HomepageScreen from './homepage-screen.enum';

export const initialContents = {
  title: 'We move heavy metal',
  subtitle: 'Hi there, would you like to know about:',
  links: [
    { label: 'us', href: '/about', screen: HomepageScreen.US },
    { label: 'projects', href: '/work', screen: HomepageScreen.PROJECTS },
  ],
};

export const usContents = {
  title: 'Want to go deeper?',
  subtitle: 'Choose whatever you want to know about us:',
  links: [
    { label: 'culture', href: '/about#culture' },
    { label: 'team', href: '/about#team' },
    { label: 'office', href: '/about#office' },
    { label: 'join us', href: '/about#join-us' },
  ],
};

export const projectsContents = {
  title: 'Want to go deeper?',
  subtitle: 'Choose between out projects\' subjects:',
  links: [
    { label: 'robotics', href: '/work#robotics' },
    { label: 'development', href: '/work#development' },
    { label: 'farming', href: '/work#farming' },
  ],
};
