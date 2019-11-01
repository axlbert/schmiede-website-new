import { useRouter } from 'next/router';

export default function DrawerLink({ children, href }) {
  const router = useRouter();
  const isLinkActive = router.pathname === href;

  const style = {
    display: 'inline-block',
    padding: '0 .5rem .25rem',
    backgroundColor: isLinkActive && 'red',
    color: isLinkActive ? 'white' : '#393f42',
    fontSize: '2.5rem',
    fontWeight: 300,
    textDecoration: 'none',
    textTransform: 'lowercase',
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
