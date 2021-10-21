import React from 'react'
import styles from './Loading.module.scss'
import Ring from '../Ring/Ring'

const Loading = ({ isLoad, ScrollTrigger }) => {
  return (
    <>
      <div className={styles.loading} id='loading'></div>
      <Ring isLoad={isLoad} ScrollTrigger={ScrollTrigger} />
    </>
  )
}

export default Loading
