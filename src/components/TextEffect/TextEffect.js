import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const TextEffect = ({ tl1, name, index }) => {
  let textSplit = name.split('')
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    if (name === 'React Native') {
      const nameSplitArray = name.split(' ')
      let nameSplit = []
      nameSplitArray.forEach(item => {
        if (nameSplit.length === 0) {
          nameSplit = item.split('')
          nameSplit.push('&nbsp;')
        } else nameSplit = nameSplit.concat(item.split(''))
      })

      textSplit = nameSplit
    }

    setIsLoad(true)
  }, [])

  useEffect(() => {
    if (tl1 && isLoad) {
      setTimeout(() => {
        const renderText = () => {
          const tl3 =
            gsap.from(`.text${index} span`, {
              duration: 0.4,
              delay: -0.4,
              stagger: 0.1,
              opacity: 0,
              y: '30px',
              ease: 'power4'
            })

          return tl3
        }

        tl1.add(renderText(), '-=1')
      }, 100)
    }
  }, [tl1, isLoad])

  return (
    textSplit.map((item, i) => {
      return (
        <span key={i} dangerouslySetInnerHTML={{ __html: item }} />
      )
    })
  )
}

export default TextEffect
