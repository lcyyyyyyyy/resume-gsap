import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

import styles from './Slider.module.scss'

import APP from './APP/APP'

import appHome from '../../static/APP-Home.mp4'
import appCart from '../../static/APP-Cart.png'
import appFilter from '../../static/APP-Filter.png'
import appProduct from '../../static/APP-Product.png'
import appCategory from '../../static/APP-Category.png'
import appDesigner from '../../static/APP-Designer.mp4'

import webCart from '../../static/WEB-Cart.png'
import webHome from '../../static/WEB-Home.png'
import webSearch from '../../static/WEB-Search.png'
import webProduct from '../../static/WEB-Product.png'
import webCategory from '../../static/WEB-Category.png'
import webNavigation from '../../static/WEB-Navigation.png'

gsap.config({ trialWarn: false })

gsap.registerPlugin(Draggable)

const Slider = () => {
  const data = [
    {
      src: appHome,
      name: 'APP Home',
      isApp: true
    },
    {
      src: appDesigner,
      name: 'APP Designer',
      isApp: true
    },
    {
      src: appCategory,
      name: 'APP Category',
      isApp: true
    },
    {
      src: appFilter,
      name: 'APP Filter',
      isApp: true
    },
    {
      src: appProduct,
      name: 'APP Product',
      isApp: true
    },
    {
      src: appCart,
      name: 'APP Cart',
      isApp: true
    },
    {
      src: webHome,
      name: 'Website Home',
      isApp: false
    },
    {
      src: webSearch,
      name: 'Website Search',
      isApp: false
    },
    {
      src: webNavigation,
      name: 'Website Navigation',
      isApp: false
    },
    {
      src: webCategory,
      name: 'Website Category',
      isApp: false
    },
    {
      src: webProduct,
      name: 'Website Product',
      isApp: false
    },
    {
      src: webCart,
      name: 'Website Cart',
      isApp: false
    }
  ]

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
          {data.map((item, i) => {
            return (
              <div key={i} className={`${styles.slide} slide`}>
                <div className={styles.proxy}></div>
                <div className={`${styles.image}${item.isApp ? ` ${styles.app}` : ''}`}>
                  <APP item={item} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Slider
