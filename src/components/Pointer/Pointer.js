import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './Pointer.module.scss'

const Pointer = () => {
  useEffect(() => {
    const onMove = e => {
      let rect = document.querySelector('.scroll-content').getBoundingClientRect()
      gsap
        .timeline()
        .to('#cursor', {
          duration: 0.3,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })

      gsap
        .timeline()
        .to('#cursor-follower', {
          duration: 0.7,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
    }

    const handleMouseEnter = () => {
      gsap
        .to('#cursor', {
          scale: 3
        })

      gsap
        .to('#cursor-follower', {
          opacity: 0
        })
    }

    const handleMouseLeave = () => {
      gsap
        .to('#cursor', {
          scale: 1
        })

      gsap
        .to('#cursor-follower', {
          opacity: 1
        })
    }

    const hoverItems = document.querySelectorAll('.hoverItem')
    hoverItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className={styles.follower} id='cursor-follower'></div>
      <div className={styles.cursor} id='cursor'></div>
    </>
  )
}

export default Pointer
