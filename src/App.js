import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import './App.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Pointer from './components/Pointer/Pointer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    if (isLoad) {
      const scroller = document.querySelector('[data-scrollbar]')
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
        <Cover isLoad={isLoad} setIsLoad={setIsLoad} ScrollTrigger={ScrollTrigger} />
        <section id='section1'>123</section>
        <section id='section2'>456</section>
        {isLoad && <Pointer />}
      </div>
    </Router>
  )
}

export default App
