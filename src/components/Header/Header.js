import React, { useState } from 'react'
import styles from './Header.module.scss'
import Menu from '../Menu/Menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={`${styles.menuSwitch}${isMenuOpen ? ` ${styles.open}` : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </header>
      <Menu isMenuOpen={isMenuOpen} />
    </>
  )
}

export default Header
