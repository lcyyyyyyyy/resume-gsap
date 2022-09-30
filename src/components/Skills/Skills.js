import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

import styles from './Skills.module.scss'

import TextEffect from '../TextEffect/TextEffect'

const Skills = ({ isLoad }) => {
  const skills = [
    'RWD',
    'Git',
    'SCSS',
    'TOEIC 805'
  ]

  const [tl1, setTl1] = useState(null)

  useEffect(() => {
    if (isLoad) {
      const bars = document.querySelectorAll('.bar')

      setTimeout(() => {
        setTl1(
          gsap.timeline({
            scrollTrigger: {
              trigger: bars[bars.length - 1],
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
      tl1
        .from('.shape', {
          duration: 0.8,
          delay: 1,
          stagger: 0.2,
          opacity: 0,
          y: '50px',
          ease: 'power4'
        })
    }
  }, [tl1])

  return (
    <div className={styles.skills}>
      <div className={styles.shapes}>
        {skills.map((item, i) => {
          return (
            <div key={i} className={`${styles.shape} shape`}>
              <p className={`shapeText${i}`}>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
