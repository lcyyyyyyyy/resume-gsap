import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import './App.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Pointer from './components/Pointer/Pointer'
import Slider from './components/Slider/Slider'
import Rate from './components/Rate/Rate'
import Skills from './components/Skills/Skills'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    if (isLoad) {
      const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document })

      ScrollTrigger.scrollerProxy('.container', {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value
          }
          return bodyScrollBar.scrollTop
        },
      })
      bodyScrollBar.addListener(ScrollTrigger.update)
      document.querySelector('.scroll-content').classList.add('load')
    }
  }, [isLoad])

  return (
    <Router>
      {/* <Header /> */}
      <div className='container'>
        <Cover isLoad={isLoad} setIsLoad={setIsLoad} />
        <section id='section1' className={isLoad ? 'loaded' : ''}>
          <Slider />
        </section>
        <section id='skills' className={isLoad ? 'loaded' : ''}>
          <div className='wrapper'>
            <Rate isLoad={isLoad} />
            <Skills isLoad={isLoad} />
          </div>
        </section>
        <section id='section3' className={isLoad ? 'loaded' : ''}>789</section>
        {isLoad && <Pointer />}
      </div>
    </Router>
  )
}

export default App
