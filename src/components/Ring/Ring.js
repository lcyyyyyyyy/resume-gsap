import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import styles from './Ring.module.scss'

const Ring = ({ timeline }) => {
  useEffect(() => {
    timeline
      .from('.one', {
        duration: 0.8,
        delay: 0.4,
        opacity: 0,
        ease: 'expo.inOut'
      })
      .from('.two', {
        duration: 0.8,
        opacity: 0,
        ease: 'expo.inOut'
      })
  }, [])

  return (
    <div className={styles.rings}>
      <div className={`${styles.ring} one`}></div>
      <div className={`${styles.ring} two`}></div>
    </div>
  )
}

export default Ring
