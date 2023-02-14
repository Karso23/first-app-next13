import React, { FC } from 'react'
import styles from '../styles/Navbar.module.css';
import ActiveLink from './ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'

  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]

const Navbar: FC = () => {
  return (
    <nav className={styles['link-container']}>
      {menuItems.map((e, i) => (
        <ActiveLink key={i} text={e.text} href={e.href} />
      ))}
    </nav>
  )
}

export default Navbar;
