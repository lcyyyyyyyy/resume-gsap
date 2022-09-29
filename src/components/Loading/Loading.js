import React from 'react'
import styles from './Loading.module.scss'
import Ring from '../Ring/Ring'

const Loading = ({ isLoad }) => {
  return (
    <>
      <div className={styles.loading} id='loading'></div>
      <Ring isLoad={isLoad} />
    </>
  )
}

export default Loading
