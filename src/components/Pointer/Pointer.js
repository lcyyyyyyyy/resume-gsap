import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './Pointer.module.scss'

const Pointer = ({ isLoad }) => {
  useEffect(() => {
    if (isLoad) {
      const onMove = (e) => {
        let rect = document.querySelector('.scroll-content').getBoundingClientRect()
        gsap.timeline()
          .to('#cursor', {
            duration: 0.3,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          })

        gsap.timeline()
          .to('#cursor-follower', {
            duration: 0.7,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          })
      }

      window.addEventListener('pointermove', onMove)
      return () => window.removeEventListener('pointermove', onMove)
    }
  }, [isLoad])

  return (
    <>
      <div className={styles.follower} id='cursor-follower'></div>
      <div className={styles.cursor} id='cursor'></div>
    </>
  )
}

export default Pointer
