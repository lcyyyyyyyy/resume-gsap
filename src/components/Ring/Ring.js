import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef
} from 'react'
import styles from './Ring.module.scss'
import { gsap } from 'gsap'

const Ring = forwardRef(({ name, delay, isPointer }, ref) => {
  const el = useRef()

  useImperativeHandle(ref, () => {
    return {
      moveTo(x, y) {
        gsap.to(el.current, { x, y, delay })
      }
    }
  }, [delay])

  return <div className={`${styles.ring} ${name}${isPointer ? ` ${styles.pointer}` : ''}`} ref={el}></div>
})

const Rings = ({ timeline }) => {
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
      .to('.one', {
        duration: 2,
        delay: -1,
        rotation: 360,
        repeat: -1,
        ease: 'none'
      })
      .to('.two', {
        duration: 8,
        delay: -1,
        rotation: 360,
        repeat: -1,
        ease: 'none'
      })
      .to(['.one', '.two'], {
        duration: 0.8,
        delay: -7,
        width: '50px',
        height: '50px',
        ease: 'expo.inOut',
        onComplete: handlePointer
      })
      .to('#loading', {
        duration: 1,
        top: '-110%',
        ease: 'expo.inOut'
      })
  }, [])

  const [isPointer, setIsPointer] = useState(false)
  const ringRefs = useRef([])

  // reset on re-renders
  ringRefs.current = []

  useEffect(() => {
    ringRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2))
  }, [])

  const handlePointer = () => {
    setIsPointer(true)

    const onMove = ({ clientX, clientY }) => {
      ringRefs.current.forEach(ref => ref.moveTo(clientX, clientY))
    }

    window.addEventListener('pointermove', onMove)

    return () => window.removeEventListener('pointermove', onMove)
  }

  const addRingRef = ref => {
    if (ref) {
      ringRefs.current.push(ref)
    }
  }

  return (
    <>
      <Ring name='one' ref={addRingRef} delay={0} isPointer={isPointer} />
      <Ring name='two' ref={addRingRef} delay={0.1} isPointer={isPointer} />
    </>
  )
}

export default Rings
