import React from 'react'

export const SliderItem = ({text = ''}) => {
  return (
    <div className='mt-10 bg-black w-56 h-80 text-white font-Poppins font-medium text-xl flex items-center justify-center border border-white'>
        {text}
    </div>
  )
}
