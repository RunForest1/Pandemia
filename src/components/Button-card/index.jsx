import React, { useState } from 'react'
import { ReactComponent as Buy } from '../../images/buy.svg'
import { ReactComponent as Close } from '../../images/close.svg'

export const ButtonCard = () => {
    const [isClicked, setClicked ] = useState(true);
  return (
    <button 
        className='bg-yellow-300 w-10 h-10 flex items-center justify-center hover:bg-yellow-500 duration-300'
        onClick={() => setClicked(!isClicked)}
    >
          {isClicked ? <Buy/> : <Close/>}
    </button>
  )
}
