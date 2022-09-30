import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

import styles from './Rate.module.scss'

// import TextEffect from '../TextEffect/TextEffect'

const Rate = ({ isLoad }) => {
  const skills = [
    'Javascript',
    'React.js',
    'Next.js',
    'React Native',
    'Vue.js',
    'GSAP'
  ]

  const [tl1, setTl1] = useState(null)

  useEffect(() => {
    if (isLoad) {
      const bars = document.querySelector('.bar')

      setTimeout(() => {
        setTl1(
          gsap.timeline({
            scrollTrigger: {
              trigger: bars,
              scroller: '.container',
              start: 'top bottom',
              markers: true
            }
          })
        )
      }, 100)
    }
  }, [isLoad])

  useEffect(() => {
    if (tl1) {
      const renderBarInner = () => {
        const tl2 =
          gsap.timeline()
            .from('.barInner', {
              duration: 1.4,
              stagger: 0.2,
              width: 0,
              ease: 'bounce'
            })

        return tl2
      }

      const renderText = () => {
        const tl3 =
          gsap.from('.barText', {
            duration: 1,
            stagger: 0.1,
            opacity: 0,
            y: '30px',
            ease: 'power4'
          })

        return tl3
      }

      tl1
        .from('.bar', {
          duration: 1.4,
          stagger: 0.2,
          width: 0,
          ease: 'expo.inOut'
        })
        .add(renderBarInner(), '-=2')
        .add(renderText(), '-=1')
    }
  }, [tl1])

  return (
    <div className={styles.rate}>
      {skills.map((item, i) => {
        return (
          <div key={i} className={styles.barWrapper}>
            <div className={`${styles.bar} bar`}></div>
            <div className={`${styles.barInner} barInner`}></div>
            <p className='barText'>{item}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Rate
