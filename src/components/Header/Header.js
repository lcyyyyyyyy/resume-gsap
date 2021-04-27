import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <img src={logo} />
      <div className={`${styles.menuSwitch}${isMenuOpen ? ` ${styles.open}` : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  )
}

export default Header
