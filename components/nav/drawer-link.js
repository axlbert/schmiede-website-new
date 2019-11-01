import { useRouter } from 'next/router'

export default function DrawerLink({ children, href }) {
  const router = useRouter();

  const style = {
    color: 'black',
    fontWeight: router.pathname === href ? 'bold' : 'normal',
    textDecoration: 'none',
  };

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
