import React, { FC } from 'react';
import { Inter } from '@next/font/google'
import Link from 'next/link'
import MainLayout from '@/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {
  return (
    <MainLayout>

      <h1 className={inter.className}>Home Page</h1>

      <h2 className={inter.className} >
        Ir a
        <Link href='/about' style={{ color: 'green' }}> About </Link>
        /
        <Link href='/contact' style={{ color: 'green' }}> Contact</Link>
      </h2>

      <p className={inter.className}>
        Get started by editing{' => '}
        <code style={{ color: 'yellow' }}>pages/index.tsx</code>
      </p>

    </MainLayout>
  )
}

export default Home;
