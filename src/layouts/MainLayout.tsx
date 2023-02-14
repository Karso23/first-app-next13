import React from 'react'
import { PropsWithChildren } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import styles from '../styles/MainLayout.module.css'

const inter = Inter({ subsets: ['latin'] })

// El type PropsWithChildren es el tipo de dato que le debemos especificar a los layouts
export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Next App</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className={styles.main}>

        {children}

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />

          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainLayout;
