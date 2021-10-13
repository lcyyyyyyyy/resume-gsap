import React from 'react'
import styles from './Loading.module.scss'
import Ring from '../Ring/Ring'

const Loading = ({ timeline }) => {
  return (
    <>
      <div className={styles.loading}></div>
      <Ring timeline={timeline} />
    </>
  )
}

export default Loading
