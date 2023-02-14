import React, { FC } from 'react'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import MainLayout from '@/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

const Pricing: FC = () => {
  return (
    <MainLayout>
      <h1 className={inter.className}>Pricing Page</h1>

      <h2 className={inter.className} >
        Ir a
        <Link href='/' style={{ color: 'green' }}> Home</Link>
      </h2>

      <p className={inter.className}>
        Get started by editing{' => '}
        <code style={{ color: 'yellow' }}>pages/pricing.tsx</code>
      </p>
    </MainLayout>
  )
}

export default Pricing;
