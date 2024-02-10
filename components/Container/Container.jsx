import React, { useEffect, useState } from 'react'
import './Container.css'
import rolldice from '../../assets/images/icon-dice.svg'
import patternDesktop from '../../assets/images/pattern-divider-desktop.svg'
import patternMobile from '../../assets/images/pattern-divider-mobile.svg'

function Container({ advice }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const setWindowSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowSize)
    return () => {
      window.removeEventListener('resize', setWindowSize)
    }
  }, [])

  return (
    <div className='advice__container'>
      <p className='advice__title'>ADVICE #{advice.id}</p>
      <p className='advice__statement'>"{advice.advice}"</p>
      <div className='advice__pattern'>
        <img src={windowWidth <= 700 ? patternMobile : patternDesktop}/>
      </div>
      <button className='advice__btn'>
        <img src={rolldice}/>
      </button>
    </div>
  )
}

export default Container