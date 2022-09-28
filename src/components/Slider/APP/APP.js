import React from 'react'

import styles from './APP.module.scss'

import Home from '../../../static/Home.mp4'
import iPhone13Pro from '../../../static/iPhone13Pro.png'

const APP = () => {
  return (
    <div className={styles.phone}>
      <video autoPlay muted loop playsInline>
        <source src={Home} type='video/mp4' />
      </video>
      <img src={iPhone13Pro} alt='Home' />
    </div>
  )
}

export default APP
