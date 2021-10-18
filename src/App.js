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
      const bodyScrollBar = Scrollbar.init(scroller)

      ScrollTrigger.scrollerProxy('.container', {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value
          }
          return bodyScrollBar.scrollTop
        },
      })

      document.querySelector('.scroll-content').classList.add('load')
    }
  }, [isLoad])

  return (
    <Router>
      {/* <Header /> */}
      <div className='container' data-scrollbar>
        <Cover setIsLoad={setIsLoad} />
        <section>123</section>
        <Pointer isLoad={isLoad} />
      </div>
    </Router>
  )
}

export default App
