import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './Ring.module.scss'

const Rings = () => {
  useEffect(() => {
    gsap.timeline()
      .from(['.one', '.two'], {
        duration: 0.8,
        delay: 0.4,
        opacity: 0,
        ease: 'expo.inOut'
      })
      .to('.one', {
        duration: 2,
        left: '70%',
        ease: 'expo.inOut'
      })
      .to('.two', {
        duration: 2,
        delay: -1.6,
        left: '70%',
        ease: 'expo.inOut'
      })
      .to('#loading', {
        duration: 1,
        top: '-110%',
        ease: 'expo.inOut'
      })
  }, [])

  return (
    <>
      <div className={`${styles.ring} one`}></div>
      <div className={`${styles.ring} two`}></div>
    </>
  )
}

export default Rings
