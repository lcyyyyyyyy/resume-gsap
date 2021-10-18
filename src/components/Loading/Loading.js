import React from 'react'
import styles from './Loading.module.scss'
import Ring from '../Ring/Ring'

const Loading = () => {
  return (
    <>
      <div className={styles.loading} id='loading'></div>
      <Ring />
    </>
  )
}

export default Loading
