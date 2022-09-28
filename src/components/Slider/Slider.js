import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

import styles from './Slider.module.scss'

import APP from './APP/APP'

gsap.config({ trialWarn: false })

gsap.registerPlugin(Draggable)

const Slider = () => {
  useEffect(() => {
    const container = document.getElementById('slider')
    const proxy = container.querySelector('.proxy')
    const slider = document.getElementById('sliderInner')
    const sliderContent = document.getElementById('sliderContent')
    const slides = [...container.querySelectorAll('.slide')]

    let sliderWidth = 0
    let prevSliderWidth = 0
    let offset = 0

    const setBounds = () => {
      prevSliderWidth = sliderWidth
      sliderWidth = slides[0].offsetWidth * slides.length

      const newX =
        (sliderWidth / 100) *
        (gsap.getProperty(proxy, 'x') / (prevSliderWidth / 100))

      gsap.to([slider, proxy], { width: sliderWidth, x: newX })
    }

    setBounds()

    const draggable = Draggable.create(proxy, {
      type: 'x',
      trigger: container,
      bounds: container,
      zIndexBoost: false,
      throwProps: true,
      edgeResistance: 0.75,
      dragResistance: 0.1,
      onPress: function () {
        offset = this.x - gsap.getProperty(proxy, 'x')

        gsap.killTweensOf(slider)
        gsap.to(slider, { duration: 0.2 })
      },
      onDrag: function () {
        gsap.to(slider, {
          duration: 0.8,
          x: () => this.x - offset,
          overwrite: 'auto',
          ease: 'power2'
        })
      },
      onRelease: function () {
        gsap.to(slider, { duration: 0.5, overwrite: 'auto' })
      }
    })

    window.addEventListener('resize', setBounds)
    return () => window.removeEventListener('resize', setBounds)
  }, [])

  return (
    <div className={styles.slider} id='slider'>
      <div className={`${styles.proxy} proxy`} id='proxy'></div>
      <div className={styles.sliderInner} id='sliderInner'>
        <div className={styles.sliderContent} id='sliderContent'>
          <div className={`${styles.slide} slide`}>
            <div className={styles.proxy}></div>
            <div className={styles.image}>
              <APP />
            </div>
          </div>
          <div className={`${styles.slide} slide`}>
            <div className={styles.proxy}></div>
            <div className={styles.image}>
              <a href="https://greensock.com" className='hoverItem'>
                <img src="https://images.unsplash.com/photo-1526973578717-38e3919604e8?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c737c70c1dc740c8285f0074eaaab520" alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.slide} slide`}>
            <div className={styles.proxy}></div>
            <div className={styles.image}>
              <a href="https://greensock.com" className='hoverItem'>
                <img src="https://images.unsplash.com/photo-1526973578717-38e3919604e8?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c737c70c1dc740c8285f0074eaaab520" alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.slide} slide`}>
            <div className={styles.proxy}></div>
            <div className={styles.image}>
              <a href="https://greensock.com">
                <img src="https://images.unsplash.com/photo-1526973578717-38e3919604e8?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c737c70c1dc740c8285f0074eaaab520" alt="" />
              </a>
            </div>
          </div>
          <div className={`${styles.slide} slide`}>
            <div className={styles.proxy}></div>
            <div className={styles.image}>
              <a href="https://greensock.com">
                <img src="https://images.unsplash.com/photo-1526973578717-38e3919604e8?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c737c70c1dc740c8285f0074eaaab520" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
