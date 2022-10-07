import React from 'react'

import styles from './APP.module.scss'

import iPhone13Pro from '../../../static/iPhone13Pro.png'

const APP = ({ item }) => {
  return (
    <div className={styles.phone}>
      {item.src.match(/.mp4$/) ?
        <video autoPlay muted loop playsInline>
          <source src={item.src} type='video/mp4' />
        </video>
        :
        <img className={styles.image} src={item.src} alt={item.name} />
      }
      {item.isApp &&
        <div className={styles.frame}>
          <img src={iPhone13Pro} alt={item.name} />
        </div>
      }
    </div>
  )
}

export default APP
