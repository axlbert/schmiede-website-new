import HomepageScreen from './homepage-screen.enum';

export const initialContents = {
  title: 'We move heavy metal',
  subtitle: 'What would you like to learn more about?',
  links: [
    { label: 'The Company', href: '/about', screen: HomepageScreen.US },
    { label: 'Our Work', href: '/work', screen: HomepageScreen.PROJECTS },
  ],
};

export const usContents = {
  title: 'What aspect about schmiede.one are you most interested in?',
  subtitle: 'Pick a category',
  links: [
    { label: 'Culture', href: '/about#culture' },
    { label: 'Team', href: '/about#team' },
    { label: 'Our Space', href: '/about#office' },
    { label: 'Job Openings', href: '/about#join-us' },
  ],
};

export const projectsContents = {
  title: 'Which domain of our work are you curious about?',
  subtitle: 'Choose a subject',
  links: [
    { label: 'robotics', href: '/work#robotics' },
    { label: 'software development', href: '/work#development' },
    { label: 'farming', href: '/work#farming' },
  ],
};
