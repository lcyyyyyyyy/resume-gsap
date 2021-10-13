import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { gsap } from 'gsap'
import './App.css'
import Header from './components/Header/Header'
import Loading from './components/Loading/Loading'

function App() {
  const [tl, setTl] = useState(() => gsap.timeline())

  return (
    <Router>
      {/* <Header /> */}
      <Loading timeline={tl} />
    </Router>
  )
}

export default App
