import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import styles from './Menu.module.scss'

const Menu = ({ isMenuOpen }) => {
  const Item = ({ link, title }) => {
    return (
      <div className={`${styles.item} item`}>
        <Link to={link}>{title}</Link>
      </div>
    )
  }

  let menuContainerRef = useRef()
  let q = gsap.utils.selector(menuContainerRef)
  const tl = useRef()

  useEffect(() => {
    handleMenu()
  }, [isMenuOpen])

  const handleMenu = () => {
    if (isMenuOpen) {
      tl.current = gsap.timeline()
        .to(menuContainerRef.current, {
          duration: 1,
          left: 0,
          ease: 'expo.inOut'
        })
        .to(q('.item'), {
          duration: 0.8,
          delay: -0.4,
          stagger: 0.1,
          transform: 'none',
          opacity: 1,
          ease: 'expo.out'
        })
    } else {
      tl.current = gsap.timeline()
        .from(q('.item'), {
          duration: 0.8,
          delay: 0.2,
          stagger: 0.1,
          transform: 'none',
          opacity: 1,
          ease: 'expo.out'
        })
        .to(menuContainerRef.current, {
          duration: 0.8,
          delay: -0.8,
          left: '-100%',
          ease: 'expo.inOut'
        })
    }
  }

  return (
    <div
      className={styles.menuContainer}
      ref={menuContainerRef}>
      <nav className={styles.nav}>
        <Item link='/' title='Home' />
        <Item link='/clothing' title='Clothing' />
        <Item link='/beauty' title='Beauty' />
        <Item link='/shoes' title='Shoes' />
      </nav>
    </div>
  )
}

export default Menu
