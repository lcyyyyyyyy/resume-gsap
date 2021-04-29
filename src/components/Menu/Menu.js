import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <Link to='/'>Home</Link>
        </div>
        <div className={styles.item}>
          <Link to='/about'>About</Link>
        </div>
        <div className={styles.item}>
          <Link to='/showcase'>Showcase</Link>
        </div>
        <div className={styles.item}>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Menu
