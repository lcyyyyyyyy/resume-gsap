import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Loading from './components/Loading/Loading'
import Pointer from './components/Pointer/Pointer'

function App() {
  const [isShowPointer, setIsShowPointer] = useState(false)

  return (
    <Router>
      {/* <Header /> */}
      <Cover />
      <Loading setIsShowPointer={setIsShowPointer} />
      <Pointer isShowPointer={isShowPointer} />
    </Router>
  )
}

export default App
