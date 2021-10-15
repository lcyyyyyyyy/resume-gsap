import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import { gsap } from 'gsap'
import styles from './Pointer.module.scss'

const Circle = forwardRef(({ name, delay, isShowPointer }, ref) => {
  const el = useRef()

  useImperativeHandle(ref, () => {
    return {
      moveTo(x, y) {
        gsap.to(el.current, { x, y, delay })
      }
    }
  }, [delay])

  return <div className={`${styles.circle} ${name}${isShowPointer ? ` ${styles.show}` : ''}`} ref={el}></div>
})

const Pointer = ({ isShowPointer }) => {
  const circleRefs = useRef([])

  // reset on re-renders
  circleRefs.current = []

  useEffect(() => {
    circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2))
    if (isShowPointer) handlePointer()
  }, [isShowPointer])

  const handlePointer = () => {
    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY))
    }

    window.addEventListener('pointermove', onMove)

    return () => window.removeEventListener('pointermove', onMove)
  }

  const addCircleRef = ref => {
    if (ref) {
      circleRefs.current.push(ref)
    }
  }

  return (
    <>
      <Circle name='small' ref={addCircleRef} delay={0} isShowPointer={isShowPointer} />
      <Circle name='large' ref={addCircleRef} delay={0.1} isShowPointer={isShowPointer} />
    </>
  )
}

export default Pointer
