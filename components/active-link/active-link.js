import { useRouter } from 'next/router'

export default function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginLeft: 60,
    textDecoration: 'none',
    color: 'black',
    fontWeight: router.pathname === href ? 'bold' : 'normal',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
