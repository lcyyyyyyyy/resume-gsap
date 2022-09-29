import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Loading from '../Loading/Loading'
import styles from './Cover.module.scss'

const Cover = ({ isLoad, setIsLoad }) => {
  useEffect(() => {
    gsap.timeline()
      .from('.letter', {
        duration: 0.8,
        delay: 4,
        stagger: 0.1,
        opacity: 0,
        ease: 'expo.inOut',
        onComplete: onComplete
      })

    const onMove = ({ clientX, clientY }) => {
      let posX = (clientX / innerWidth) - 0.5
      let posY = (clientY / innerHeight) - 0.5

      gsap.timeline()
        .to('.letters', {
          duration: 0.8,
          rotationY: 5 * posX,
          rotationX: 5 * posY,
          ease: 'expo.out',
          transformPerspective: 900,
          transformOrigin: 'center'
        })
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const onComplete = () => {
    setIsLoad(true)
  }

  return (
    <section id='cover' className={styles.cover}>
      <div className='letters'>
        <span className='letter'>F</span>
        <span className='letter'>R</span>
        <span className='letter'>O</span>
        <span className='letter'>N</span>
        <span className='letter'>T</span>
        <span className='letter'>-</span>
        <span className='letter'>E</span>
        <span className='letter'>N</span>
        <span className='letter'>D</span>
      </div>
      <Loading isLoad={isLoad} />
    </section>
  )
}

export default Cover
