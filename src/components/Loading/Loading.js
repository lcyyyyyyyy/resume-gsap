import React from 'react'
import styles from './Loading.module.scss'
import Ring from '../Ring/Ring'

const Loading = ({ timeline, setIsShowPointer }) => {
  return (
    <>
      <div className={styles.loading} id='loading'></div>
      <Ring setIsShowPointer={setIsShowPointer} />
    </>
  )
}

export default Loading
