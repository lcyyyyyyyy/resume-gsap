import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import styles from './Ring.module.scss'

const Rings = ({ isLoad }) => {
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

  const [isLeave, setIsLeave] = useState(false)

  useEffect(() => {
    if (isLoad) {
      setTimeout(() => {
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#section1',
            scroller: '.container',
            start: 'top top+=70%',
            end: '+=70%',
            scrub: 0.3,
            onLeave: onLeave
            // markers: true
          }
        })

        tl1.to(['.one', '.two'], {
          left: '30%',
          top: '150%',
          x: '-30%',
          y: '-150%',
          ease: 'none'
        })
      }, 100)
    }
  }, [isLoad])

  useEffect(() => {
    if (isLeave) {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#section1',
          scroller: '.container',
          start: 'top top+=70%',
          end: '+=70%',
          scrub: 0.3,
          // markers: true
        }
      })

      tl2.to(['.one', '.two'], {
        left: '70%',
        top: '250%',
        x: '-70%',
        y: '-250%',
        ease: 'none',
      })
    }
  }, [isLeave])

  useEffect(() => {
    if (isLeave) {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '#skills',
          scroller: '.container',
          start: 'top top+=70%',
          end: '+=70%',
          scrub: 0.3,
          // markers: true
        }
      })

      tl3.to(['.one', '.two'], {
        left: '30%',
        top: '350%',
        x: '-30%',
        y: '-350%',
        ease: 'none'
      })
    }
  }, [isLeave])

  const onLeave = () => {
    setIsLeave(true)
  }

  const onEnter = () => {
    console.log(123)
  }

  return (
    <>
      <div className={`${styles.ring} one`}></div>
      <div className={`${styles.ring} two`}></div>
    </>
  )
}

export default Rings
