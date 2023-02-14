import React, { FC, ReactElement, ReactNode } from 'react'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import MainLayout from '@/layouts/MainLayout'
import DarkLayout from '@/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export const About = () => {
  return (
    <MainLayout>
      <h1 className={inter.className}>About Page</h1>

      <h2 className={inter.className} >
        Ir a
        <Link href='/' style={{ color: 'green' }}> Home</Link>
      </h2>

      <p className={inter.className}>
        Get started by editing{' => '}
        <code style={{ color: 'yellow' }}>pages/about.tsx</code>
      </p>
    </MainLayout>
  )
}

export default About;

//Funcion que carga los layouts a nuestra pagina segun el curso pero no funciona con Next 13
/* About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
} */
