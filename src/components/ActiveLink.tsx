import React, { FC, CSSProperties } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

// CSSProperties es el typo de datos para los estilos CSS
const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

// Se crea interfaz para tipar las props que recibira nuestro componente
interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

  const router = useRouter();

  return (
    <Link style={router.asPath === href ? style : undefined} className={inter.className} href={href}>{text}</Link>
  )
}

export default ActiveLink
